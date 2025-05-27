import { env } from "app/config/env";
import { shopifyUrls } from "./urls";

export const getProducts = async () => {

    try {
        const response = await fetch(shopifyUrls.producs.all,{
                method: "GET",
                headers: {
                    "X-Shopify-Access-Token": env.SHOPIFY_TOKEN as string,
                },
                cache: "force-cache" // o "no-store" si quieres que siempre sea en vivo
            }
        );
        const { products } = await response.json();
        return products;
    } catch (error) {
        console.log(error)
    }

};