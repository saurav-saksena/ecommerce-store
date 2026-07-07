import ProductListing from "@/components/product/ProductListing";
import { getProducts } from "@/services/product.service";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <section className="mb-8">
        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <p className="mt-2 text-gray-600">
          Discover our latest collection.
        </p>
      </section>

      <ProductListing products={products} />
    </>
  );
}