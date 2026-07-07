import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

export default function CartPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">
        Shopping Cart
      </h1>

      <CartItem />

      <CartSummary />
    </section>
  );
}