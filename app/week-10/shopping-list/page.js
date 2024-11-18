// pages/week-10/shopping-list.js
"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../../_utils/auth-context";
import NewItem from "../../components/NewItem";
import ItemList from "../../components/ItemList";
import MealIdeas from "../../components/MealIdeas";
import { getItems, addItem } from "../../_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Fetch items from Firestore when the page loads
  useEffect(() => {
    if (user) {
      const fetchItems = async () => {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      };
      fetchItems();
    }
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      await addItem(user.uid, newItem); // Add item to Firestore
      setItems(prevItems => [...prevItems, newItem]); // Update local state
    }
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name
      .split(',')[0]
      .replace(/[^a-zA-Z\s]/g, '')
      .trim();

    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="m-4 text-white bg-slate-950 p-4 flex flex-col items-start">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex">
        <div className="flex flex-col items-start">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
