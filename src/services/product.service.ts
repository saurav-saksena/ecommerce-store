import { API } from "@/constants/api";
import { Product } from "@/types/product";

interface ProductResponse {
  products: Product[];
}

export async function getProducts() {
  const response = await fetch(
    `${API.BASE_URL}/products?limit=100`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductResponse = await response.json();

  return data.products;
}

export async function getProductById(
  id: number
): Promise<Product | null> {
  const response = await fetch(
    `${API.BASE_URL}/products/${id}`,
    {
      cache: "no-store",
    }
  );

  // Product not found
  if (response.status === 404) {
    return null;
  }

  // Any other server error
  if (!response.ok) {
    throw new Error("Failed to fetch product.");
  }

  const product: Product = await response.json();

  return product;
}