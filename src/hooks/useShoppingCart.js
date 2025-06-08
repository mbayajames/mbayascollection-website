import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NotificationContext } from "../context/NotificationContext";

function useShoppingCart() {
  const { cart, addToCart, removeFromCart, updateQuantity } =
    useContext(CartContext);
  const { addNotification } = useContext(NotificationContext);

  const addItem = (product) => {
    addToCart(product);
    addNotification(`${product.name} added to cart!`, "success");
  };

  const removeItem = (id) => {
    removeFromCart(id);
    addNotification("Item removed from cart.", "info");
  };

  const updateItemQuantity = (id, quantity) => {
    updateQuantity(id, quantity);
    addNotification("Cart updated.", "info");
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return { cart, addItem, removeItem, updateItemQuantity, getTotal };
}

export default useShoppingCart;
