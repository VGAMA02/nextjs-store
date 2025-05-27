import { env } from "app/config/env"

export const shopifyUrls = {
    producs: {
        'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2025-04/products.json`
        
    },
    collections: {
        'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2025-04/smart_collections.json`, 
        'products': (id: string) => `https://${env.SHOPIFY_HOSTNAME}/admin/api/2025-04/collections/${id}/products.json`, 
    }

}