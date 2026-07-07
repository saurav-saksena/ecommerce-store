"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/hooks/useCart";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
    const { items, addToCart } = useCart();

    const isInCart = items.some(
    (item) => item.id === product.id
    );
  return (
    <section className="grid gap-10 md:grid-cols-2">
      <div className="relative h-[450px] rounded-xl bg-gray-100">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-xl object-contain"
        />
      </div>

      <div className="space-y-5">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
          {product.category}
        </span>

        <h1 className="text-4xl font-bold">
          {product.title}
        </h1>

        <p className="text-gray-600">
          {product.description}
        </p>

        <p className="text-3xl font-bold">
          ${product.price}
        </p>

        <p>
          ⭐ {product.rating}
        </p>

        <p>
          Stock: {product.stock}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
        <button
            onClick={() => addToCart(product)}
            className="flex-1 rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
        >
            {isInCart ? "Add One More" : "Add to Cart"}
        </button>

        {isInCart && (
            <Link
            href="/cart"
            className="flex-1 rounded-lg border border-black px-6 py-3 text-center transition hover:bg-gray-100"
            >
            View Cart
            </Link>
        )}
        </div>
      </div>
    </section>
  );
}