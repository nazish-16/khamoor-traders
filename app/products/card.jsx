import React, { useContext } from "react";
import GlobalContext from "../../GlobalContext";

export default function Card({ product }) {
  const { globals, setGlobals } = useContext(GlobalContext);

  const isInCart = (id) => {
    return globals.cartItems.some((item) => item.id === id);
  };

  const addItemToCart = (product) => {
    product.quantity = 1;
    setGlobals({ ...globals, cartItems: [...globals.cartItems, product] });
  };

  const incrementItemInCart = (id) => {
    setGlobals({
      ...globals,
      cartItems: globals.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  const decrementItemInCart = (id) => {
    const cartItem = globals.cartItems.find((item) => item.id === id);
    if (cartItem.quantity === 1) {
      removeItemFromCart(id);
      return;
    }
    setGlobals({
      ...globals,
      cartItems: globals.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ),
    });
  };

  const removeItemFromCart = (id) => {
    setGlobals({
      ...globals,
      cartItems: globals.cartItems.filter((item) => item.id !== id),
    });
  };

  return (
    <div className="group relative block overflow-hidden bg-white shadow-md rounded-lg">
      <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 hover:text-gray-600 transition">
        <span className="sr-only">Wishlist</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-contain transition-transform duration-300 group-hover:scale-105"
      />

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 truncate">{product.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.description || "High-quality product"}</p>
        <p className="mt-2 text-lg font-bold text-gray-900">{product.price}</p>

        <form className="mt-4">
          {!isInCart(product.id) ? (
            <button
              type="button"
              className="w-full flex items-center justify-between bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
              onClick={() => addItemToCart(product)}
            >
              <span>Add</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          ) : (
            <div className="flex items-center justify-between mt-2 bg-gray-600 text-white py-2 px-4 rounded-lg">
              <button
                type="button"
                className="w-7 h-7 flex items-center justify-center rounded-full text-white"
                onClick={() => decrementItemInCart(product.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                </svg>
              </button>

              <span className="text-md">{globals.cartItems.find((item) => item.id === product.id).quantity}</span>

              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center rounded-full text-white"
                onClick={() => incrementItemInCart(product.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
