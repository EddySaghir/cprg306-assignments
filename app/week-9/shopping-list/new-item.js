"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) { 
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
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

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!name.trim()) {
      alert("Please enter a valid item name.");
      return;
    }

    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name: name.trim(),
      quantity: quantity,
      category: category,
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <main>
      <div className="flex flex-col items-start bg-gray-800 w-[400px] rounded-md p-6 mt-5 ml-4"> 
        <p className="text-lg font-bold text-white mb-4">Add a New Grocery Item:</p>

        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter the item name (e.g., 'Chicken Breast')"
            className="rounded-md h-10 mb-5 w-full px-3 text-black"
          />

          <div className="flex items-center justify-between space-x-8 mb-4">
            <div className="bg-white w-32 rounded-md h-10 flex items-center text-black p-1">
              {quantity}
              <button
                type="button"
                onClick={decrement}
                disabled={quantity === 1}
                className="w-8 ml-auto p-2 bg-red-500 h-6 rounded-md flex items-center justify-center hover:bg-red-400 disabled:bg-gray-400 mr-2"
              >
                -
              </button>
              <button
                type="button"
                onClick={increment}
                disabled={quantity === 20}
                className="w-8 bg-blue-500 h-6 rounded-md flex items-center justify-center hover:bg-blue-400 disabled:bg-gray-400"
              >
                +
              </button>
            </div>

            <div className="w-40">
              <select
                value={category}
                onChange={handleCategoryChange}
                className="text-black bg-white rounded-md h-10 w-full"
              >
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex justify-start"> 
            <button
              type="submit"
              className="py-2 px-4 bg-green-600 rounded-md w-full font-bold text-white hover:bg-green-500"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
