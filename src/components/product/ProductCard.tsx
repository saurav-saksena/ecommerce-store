import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg"
    >
      <div className="relative h-60 w-full bg-gray-100">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         25vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="space-y-2 p-4">
        <p className="text-sm text-gray-500">{product.category}</p>

        <h2 className="line-clamp-2 text-lg font-semibold">
          {product.title}
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">
            ${product.price}
          </span>

          <span className="text-sm text-yellow-600">
            ⭐ {product.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}