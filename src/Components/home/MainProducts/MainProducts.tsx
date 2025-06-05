'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './MainProducts.module.sass';

interface Product {
  id: number;
  title: string;
  images: { src: string }[];
  // Agrega otras propiedades según sea necesario
}

export const MainProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api');
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className={styles.MainProducts}>
      <h3>✨ ¡Nuevos productos lanzados!</h3>
      <div className={styles.MainProducts__grid}>
        {products.map((product) => {
          const imageSrc = product.images[0]?.src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              {imageSrc && (
                <Image src={imageSrc} fill alt={product.title} loading="eager" />
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};