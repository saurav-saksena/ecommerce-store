"use client";

import Link from "next/link";
import { useState } from "react";

import { useCart } from "@/hooks/useCart";
import Modal from "@/components/ui/Modal";

export default function CartSummary() {
    const [isCheckoutOpen, setIsCheckoutOpen] =
  useState(false);
  const { items } = useCart();

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="sticky top-24 rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Order Summary
      </h2>

      <div className="mt-6 flex justify-between">
        <span>Total Items</span>
        <span>{totalItems}</span>
      </div>

      <div className="mt-3 flex justify-between">
        <span>Subtotal</span>
        <span>₹{totalPrice.toFixed(2)}</span>
      </div>

      <hr className="my-5" />

      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>
        <span>₹{totalPrice.toFixed(2)}</span>
      </div>

     <button
        disabled={!items.length}
        onClick={() => setIsCheckoutOpen(true)}
        className={`mt-6 w-full rounded-lg py-3 font-medium transition ${
        items.length
         ? "bg-black text-white hover:bg-gray-800"
            : "cursor-not-allowed bg-gray-300 text-gray-500"
  }`}
>
  Checkout
</button>

      <Link
        href="/"
        className="mt-3 block text-center text-sm text-blue-600 hover:underline"
      >
        Continue Shopping
      </Link>
      <Modal
  isOpen={isCheckoutOpen}
  title="🛒 Checkout"
  onClose={() => setIsCheckoutOpen(false)}
>
  <p className="text-gray-600">
    This is a demo e-commerce application built as a
    machine task.
  </p>

  <p className="mt-3 text-gray-600">
    Product listing, search, filters, cart management,
    and responsive design have been implemented.
    Checkout and payment integration are outside the
    scope of this assignment.
  </p>

  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
    <Link
  href="/"
  onClick={() => setIsCheckoutOpen(false)}
  className="flex-1 rounded-lg bg-black px-4 py-3 text-center text-white hover:bg-gray-800"
>
  Continue Shopping
</Link>

    <button
      onClick={() => setIsCheckoutOpen(false)}
      className="flex-1 rounded-lg border px-4 py-3 hover:bg-gray-100"
    >
      Close
    </button>
  </div>
</Modal>
    </div>
  );
}