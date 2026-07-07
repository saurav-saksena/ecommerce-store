"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";

export default function CartItem() {
  const {
    items,
    removeFromCart,
    updateQuantity,
  } = useCart();

 if (items.length === 0) {
  return (
    <div className="rounded-xl border bg-white p-10 text-center shadow-sm">
      <div className="text-6xl">🛒</div>

      <h2 className="mt-4 text-2xl font-bold">
        Your cart is empty
      </h2>

      <p className="mt-2 text-gray-500">
        Looks like you have not added anything yet.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-6 rounded-xl border bg-white p-6 shadow-sm md:flex-row"
        >
          <div className="relative h-40 w-full md:w-40">
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         25vw"
              className="rounded-lg object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold">
                {item.title}
              </h2>

              <p className="mt-2 text-2xl font-bold">
                ₹{item.price}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
<button
  onClick={() => {
    if (item.quantity === 1) {
      removeFromCart(item.id);
    } else {
      updateQuantity(
        item.id,
        item.quantity - 1
      );
    }
  }}
  className="rounded border px-3 py-1 hover:bg-gray-100"
>
  -
</button>

              <span className="font-semibold">
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  updateQuantity(
                    item.id,
                    item.quantity + 1
                  )
                }
                className="rounded border px-3 py-1"
              >
                +
              </button>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
                className="ml-auto rounded bg-red-500 px-4 py-2 text-white"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}