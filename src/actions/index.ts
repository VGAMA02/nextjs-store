"use server"
import { GraphQLClientSingleton } from "app/graphql"
import { createUserMutation } from "app/graphql/mutations/createUserMutation"
import { createAccessToken } from "app/utils/auth/createAccessToken"
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
  const { customerUserErrors, customer } = customerCreate;
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