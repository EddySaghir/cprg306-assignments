"use client";
import React, { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
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

      <ul className="space-y-4 p-4 max-w-md w-full">
        {sortedItems.map((item) => (
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
