import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductDetails from "@/components/product/ProductDetails";
import { getProductById } from "@/services/product.service";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Dynamic SEO
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;

  const productId = Number(id);

  if (Number.isNaN(productId)) {
    return {
      title: "Product Not Found",
    };
  }

  const product = await getProductById(productId);

  return {
    title: product?.title,
    description: product?.description,
  };
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const productId = Number(id);

  if (Number.isNaN(productId)) {
    notFound();
  }

const product = await getProductById(productId);

if (!product) {
  notFound();
}

return <ProductDetails product={product} />;
}