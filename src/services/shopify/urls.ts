import { env } from "app/config/env"

export const shopifyUrls = {
    products: {
        'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2025-04/products.json`,
        mainProducts: `https://${env.SHOPIFY_HOSTNAME}/admin/api/2025-04/collections/507496923414/products.json`,
    },
    collections: {
        'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2025-04/smart_collections.json`, 
        'products': (id: string) => `https://${env.SHOPIFY_HOSTNAME}/admin/api/2025-04/collections/${id}/products.json`, 
    }

}