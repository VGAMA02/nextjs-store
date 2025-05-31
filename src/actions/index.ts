"use server"
import { GraphQLClientSingleton } from "app/graphql"
import { createUserMutation } from "app/graphql/mutations/createUserMutation"

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

  const { customerUserErrors, customer } = customerCreate
  console.log(customer)
  console.log(customerUserErrors)
}