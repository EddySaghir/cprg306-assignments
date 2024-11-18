// components/ItemList.js
import React from "react";

export default function ItemList({ items, onItemSelect }) {
  return (
    <div className="w-full mt-5">
      <h2 className="text-2xl mb-4">Your Items</h2>
      <ul>
        {items.map(item => (
          <li
            key={item.id}
            className="bg-gray-700 p-4 mb-2 rounded-md cursor-pointer hover:bg-gray-600"
            onClick={() => onItemSelect(item)}
          >
            {item.name} - {item.quantity} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
}
