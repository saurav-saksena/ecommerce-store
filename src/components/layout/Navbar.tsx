"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";

export default function Navbar() {
  const { items } = useCart();

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          E-Commerce
        </Link>

        <Link
          href="/cart"
          className="rounded-md bg-black px-4 py-2 text-white"
        >
          Cart
          {totalItems > 0 && ` (${totalItems})`}
        </Link>
      </div>
    </header>
  );
}