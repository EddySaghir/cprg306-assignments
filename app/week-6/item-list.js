"use client";
import React, { useState } from "react";
import itemsJson from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Make a copy of items from items.json
  let items = [...itemsJson];

  // Sort based on user preference (name or category)
  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <main className="m-4 text-white bg-slate-950 flex flex-col">
      <div className="px-4 mb-4">
        <div>
          <label className="text-lg font-semibold mr-2" htmlFor="sort">
            Sort by:
          </label>
          <button
            className={`${
              sortBy === "name" ? "bg-orange-700" : "bg-orange-500"
            } p-2 m-2 w-28 rounded-lg shadow-lg`}
            onClick={() => setSortBy("name")}
          >
            Name
          </button>
          <button
            className={`${
              sortBy === "category" ? "bg-orange-700" : "bg-orange-500"
            } p-2 m-2 w-28 rounded-lg shadow-lg`}
            onClick={() => setSortBy("category")}
          >
            Category
          </button>
        </div>
      </div>

      {/* Updated list display with flex styling and space between */}
      <ul className="space-y-4 p-4 max-w-md w-full">
        {items.map((item) => (
          <li
            key={item.id}
            className="p-4 bg-black shadow-md border rounded-lg w-full flex justify-between items-center"
          >
            <div className="text-lg font-semibold text-white">{item.name}</div>
            <div className="text-sm text-gray-300">Quantity: {item.quantity}</div>
            <div className="text-sm text-blue-500">{item.category}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
