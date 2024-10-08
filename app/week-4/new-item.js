// /app/week-4/new-item.js

"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4">Quantity: {quantity}</h2>
      <div className="flex space-x-2">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`bg-blue-500 text-white p-2 rounded ${
            quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`bg-blue-500 text-white p-2 rounded ${
            quantity === 20 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
