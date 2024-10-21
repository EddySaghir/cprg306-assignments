import ItemList from './item-list';

const Page = () => {
  return (
    <main className="p-4 bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;