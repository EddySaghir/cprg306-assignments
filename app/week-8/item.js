export default function Item({ name, quantity, category, onSelect }) {
    return (
      <div
        className="p-4 bg-black shadow-md border rounded-lg w-full flex justify-between items-center cursor-pointer"
        onClick={onSelect}
      >
        <div className="text-lg font-semibold text-white">{name}</div>
        <div className="text-sm text-gray-300">Quantity: {quantity}</div>
        <div className="text-sm text-blue-500">{category}</div>
      </div>
    );
  }
  