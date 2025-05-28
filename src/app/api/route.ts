import { getMainProducts } from "app/services/shopify/products"


export async function GET(){
    const products = await getMainProducts();
    //console.log(products)
    return Response.json({products})
}