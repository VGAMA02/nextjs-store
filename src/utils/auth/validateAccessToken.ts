import { cookies } from "next/headers"
import { GraphQLClientSingleton } from "app/graphql"
import { customerName } from "app/graphql/queries/customerName"

export const validateAccessToken = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value

  if(accessToken) { 
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

    const { customer } = await graphqlClient.request(customerName, {
      customerAccessToken: accessToken
    })

    if(customer?.firstName) {
      return customer; 
    }   
  }
}