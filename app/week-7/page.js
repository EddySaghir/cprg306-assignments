"use client";
import React, { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="p-4 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      
      <NewItem onAddItem={handleAddItem} />

      <ItemList items={items} />
    </main>
  );
};

export default Page;
