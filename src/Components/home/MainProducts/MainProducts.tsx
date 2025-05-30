
import Image from "next/image";
import styles from "./MainProducts.module.sass";
//import { getMainProducts } from "app/services/shopify/products";

 //const products = await getProducts()


export const MainProducts = async () => {
    const response = await fetch("http://localhost:3000/api"); //esconde la data

    const { products } = await response.json();
    console.log("Productos: ", products)
    console.log(process.env.SHOPIFY_API_KEY);
    console.log(process.env.SHOPIFY_HOSTNAME);
    //console.log("Productos: ", data);
    return (
       <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product:any) => {
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

