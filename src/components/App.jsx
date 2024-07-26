import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import ParkingList from './ParkingList';
import Starts from './Starts';

function App() {
  const [items, setItems] = useState([]);

  function handleClearItems() {
    const comfirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );
    if (comfirmed) setItems([]);
  }

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ParkingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClearItems={handleClearItems}
      />
      <Starts items={items} />
    </div>
  );
}

export default App;
