import { env } from "app/config/env";
import { shopifyUrls } from "./urls";

export const getCollections = async () => {

    try {
        const response = await fetch(shopifyUrls.collections.all,{
                method: "GET",
                headers: {
                    "X-Shopify-Access-Token": env.SHOPIFY_TOKEN as string,
                },
                cache: "force-cache" // o "no-store" si quieres que siempre sea en vivo
            }
        );
        const {smart_collections}= await response.json();
        const transformedCollections = smart_collections.map((collection:any) =>{
            return{
                id: collection.id,
                title: collection.title,
                handle: collection.handle
            }
        })
        return transformedCollections;
    } catch (error) {
        console.log(error)
    }

}

export const getCollectionsProducts = async (id:string) => {
    try {
        const response = await fetch(shopifyUrls.collections.products(id),{
            headers: {
                "X-Shopify-Access-Token": env.SHOPIFY_TOKEN as string,
            }
        })
        const {products} = await response.json()
        return products;
    } catch (error) {
        console.log(error);
    }
}