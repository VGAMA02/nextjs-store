import { GraphQLClientSingleton } from "app/graphql"
import { getOrdersQuery } from "app/graphql/queries/getOrders";
import { cookies } from "next/headers"


export const getCustomerOrders = async () => {
  const cookiesStorage = cookies()
  const accessToken = (await cookiesStorage).get("accessToken")?.value || ""
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const variables = {
    customerAccessToken: accessToken
  }

  const { customer } = await graphqlClient.request(getOrdersQuery, variables)
  console.log("Customer: ", customer);
  const orders = customer?.orders?.edges.map((edge) => edge.node)
  return {
    totalOrders: customer?.orders?.totalCount,
    orders
  }
}