
import Image from "next/image";
import styles from "./MainProducts.module.sass";


const getProducts = async () => {

    try {
        const response = await fetch(
            `https://${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-04/products.json`,
            {
                method: "GET",
                headers: {
                    "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY as string,
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

export const MainProducts = async () => {
    const products = await getProducts();
    console.log(process.env.SHOPIFY_API_KEY);
    console.log(process.env.SHOPIFY_HOSTNAME);
    console.log("Productos: ", products);
    return (
        <section className={styles.MainProducts}>
            <h3>New Products released</h3>
            <div className={styles.MainProducts__grid}>
                {products?.map((product: any) => {
                    const imageSrc = product.images[0].src;
                    return (
                        <article key={product.id}>
                            <p>{product.title}</p>
                            <Image src={imageSrc} fill alt={product.title} loading="eager" />
                        </article>
                    )
                })}
            </div>
        </section>
    );

}