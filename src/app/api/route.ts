import { getProducts } from "app/services/shopify"


export async function GET(){
    const producs = await getProducts();
    console.log(producs)
    return Response.json({producs})
}