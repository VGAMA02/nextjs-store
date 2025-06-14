import { getCustomerOrders } from "app/services/shopify/graphql/customer";

export default async function MyAccountPage() {
  const ordersInfo = await getCustomerOrders();
  console.log(ordersInfo);
  return (
    <div>
      <section>
        <h2>Orders</h2>
        { 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ordersInfo.orders?.map((order) => (
          <p key={order.orderNumber}>{order.orderNumber}</p>
        ))}
      </section>
    </div>
  );
}