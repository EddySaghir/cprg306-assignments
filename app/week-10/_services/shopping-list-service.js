import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const getItems = async (userId) => {
    try {
        const itemsCollection = collection(db, "users", userId, "items");
        const querySnapshot = await getDocs(itemsCollection);
        const items = [];

        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });

        return items;
    } catch (error) {
        console.error("Error in getItems: ", error);
        return [];
    }
};

export const addItem = async (userId, item) => {
    try {
        // Validate item data
        if (
            typeof item.name === 'string' && item.name.length >= 1 && item.name.length <= 50 &&
            typeof item.quantity === 'number' && item.quantity >= 1 && item.quantity <= 100 &&
            typeof item.category === 'string' && ['produce', 'dairy', 'bakery', 'meat', 'frozen foods', 'canned goods', 'dry goods', 'beverages', 'snacks', 'household', 'other'].includes(item.category)
        ) {
            const itemsCollection = collection(db, "users", userId, "items");
            const docRef = await addDoc(itemsCollection, item);
            return docRef.id;
        } else {
            throw new Error("Invalid item data");
        }
    } catch (error) {
        console.error("Error in addItem: ", error);
        return null;
    }
};