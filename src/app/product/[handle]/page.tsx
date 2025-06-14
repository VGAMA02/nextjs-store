import { ProductView } from "app/Components/product/ProductView";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";

interface Params {
  handle: string;
}

interface Props {
  params: Params;
  searchParams: { [key: string]: string | string[] | undefined };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(props: any) {
  const { params } = props as Props;
  const id = params.handle;

  if (!id) {
    return { title: "Producto no encontrado" };
  }

  const products = await getProducts(id);
  const product = products[0];

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image],
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProductPage(props: any) {
  const { params } = props as Props;
  const id = params.handle;

  if (!id) {
    redirect("/");
  }

  const products = await getProducts(id);
  const product = products[0];

  return <ProductView product={product} />;
}