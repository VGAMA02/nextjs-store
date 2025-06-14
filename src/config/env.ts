import process from "process"
export const env = {
    SHOPIFY_TOKEN:  process.env.SHOPIFY_TOKEN || "",
    SHOPIFY_HOSTNAME:  process.env.SHOPIFY_HOSTNAME || "",
    CACHE_TOKEN: process.env.CACHE_TOKEN,
    SHOPIFY_GRAPHQL_ENDPOINT: process.env.SHOPIFY_GRAPHQL_ENDPOINT || "",
    SHOPIFY_STOREFRONT_TOKEN: process.env.SHOPIFY_STOREFRONT_TOKEN || "",
    OPEN_AI_KEY: process.env.OPEN_AI_KEY || ""

}