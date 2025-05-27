
import Image from "next/image";
import styles from "./MainProducts.module.sass";
import { getProducts } from "app/services/shopify";

 //const products = await getProducts()


export const MainProducts = async () => {
    const response = await fetch("http://localhost:3000/api"); //esconde la data
    const data = await response.json();
   
    console.log(process.env.SHOPIFY_API_KEY);
    console.log(process.env.SHOPIFY_HOSTNAME);
    //console.log("Productos: ", data);
    return (
        <section className={styles.MainProducts}>
            <h3>New Products released</h3>
            <div className={styles.MainProducts__grid}>
                {data.producs?.map((product: any) => {
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