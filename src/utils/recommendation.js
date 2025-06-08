import { fetchProducts } from "./api";

// Mock recommendation algorithm based on category
export async function getRecommendations(productId, limit = 4) {
  try {
    const products = await fetchProducts();
    const currentProduct = products.find((p) => p.id === productId);
    if (!currentProduct) return [];

    // Filter products by same category, excluding current product
    const recommendations = products
      .filter(
        (p) => p.category === currentProduct.category && p.id !== productId
      )
      .slice(0, limit);

    return recommendations;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return [];
  }
}
