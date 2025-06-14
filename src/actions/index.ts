"use server"
import { GraphQLClientSingleton } from "app/graphql"
import { createCartMutation } from "app/graphql/mutations/createCartMutation"
import { createUserMutation } from "app/graphql/mutations/createUserMutation"
import { createAccessToken } from "app/utils/auth/createAccessToken"
import { validateAccessToken } from "app/utils/auth/validateAccessToken"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

interface CustomerCreateResponse {
  customerCreate: {
    customer: {
      firstName: string
      lastName: string
      email: string
      phone: string
    } | null
    customerUserErrors: {
      field: string[]
      message: string
      code: string
    }[]
  }
}

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData)
  delete formDataObject["password_confirmation"]
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const variables = {
    input: {
      ...formDataObject,
      phone: '+52' + formDataObject.phone
    }
  }

  const { customerCreate } = await graphqlClient.request<CustomerCreateResponse>(
    createUserMutation,
    variables
  )


  console.log("CustomerCreate" , customerCreate);
  const {customer } = customerCreate;
  console.log("Customer" , customer);
  if(customer?.firstName){
    await createAccessToken(formDataObject.email as string, formDataObject.password as string);
    redirect("/store");
  }







}

export const handleLogin =  async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  const accessToken = await createAccessToken(formDataObject.email as string, formDataObject.password as string);
  if(accessToken){
    redirect("/store")
  }  

}

export const handleCreateCart = async (items: CartItem[]) => {
  const cookiesStore = cookies()
  const accesToken = (await cookiesStore).get('accessToken')?.value as string

  if(!accesToken) redirect('/login')

  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const customer = await validateAccessToken()
  const variables = {
    input: {
      buyerIdentity: {
        customerAccessToken: accesToken,
        email: customer?.email
      },
      lines: items.map(item => ({
        merchandiseId: item.merchandiseId,
        quantity: item.quantity
      }))
    }
  }

  const { cartCreate }: {
    cartCreate?: {
      cart?: {
        checkoutUrl: string
      }
    }
  } = await graphqlClient.request(createCartMutation, variables)

  return cartCreate?.cart?.checkoutUrl
}