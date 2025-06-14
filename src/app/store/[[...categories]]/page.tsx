import { ProductsWrapper } from "app/Components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify/products";
import { getCollections, getCollectionsProducts } from "app/services/shopify/collections";

export const runtime = "edge";

interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Category(props) {
  const { params } = props as CategoryProps;

  const categories = params?.categories ?? [];
  let products = [];
  const collections = await getCollections();

  if (categories.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const selectedCollection = collections.find((collection) => collection.handle === categories[0]);
    if (selectedCollection) {
      products = await getCollectionsProducts(selectedCollection.id);
    }
  } else {
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
}