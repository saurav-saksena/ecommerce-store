import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),

  title: {
    default: "E-Commerce Store",
    template: "%s | E-Commerce Store",
  },

  description:
    "Modern e-commerce application built with Next.js, TypeScript and Tailwind CSS.",

  keywords: [
    "Next.js",
    "React",
    "E-Commerce",
    "TypeScript",
    "Tailwind CSS",
  ],

  authors: [
    {
      name: "Kumar Saurav Saksena",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
<body className="min-h-screen flex flex-col bg-gray-50">
  <CartProvider>
    <Navbar />

    <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-8">
      {children}
    </main>

    <Footer />
  </CartProvider>
</body>
</html>
  );
}