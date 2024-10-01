const Item = ({ name, quantity, category }) => {
    return (
      <li className="p-8 border-b border-gray-500 flex justify-between">
        <span>{name}</span>
        <span>Qty: {quantity}</span>
        <span className="text-white-500 italic">{category}</span>
      </li>
    );
  };
  
  export default Item;
  