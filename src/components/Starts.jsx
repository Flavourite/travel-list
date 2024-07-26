export default function Starts({ items }) {
  if (!items.length)
    return (
      <em className="stats">
        Start adding some items into your packing list 🚀
      </em>
    );
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everything ready to go 🛫'
          : `💼 You have ${numItems} items on your list, and you have already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
