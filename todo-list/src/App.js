import React, { useState } from "react";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if(newItem) setItems((prevItems) => [...prevItems, newItem]);
    setNewItem('');
  }

const deleteItem = (key) =>{

  const newArr = items.filter((items, index) => index !== key);
  setItems(newArr);

}

  return (
    <div>
      <h1>TODO LIST</h1>
      <input
        type="text"
        placeholder="Add TODO"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add TODO</button>
      <ul>
        {items.map((item,key)=> <li key={key} onClick={()=> deleteItem(key)}>{item}</li>)}
      </ul>
    </div>
  );
};

export default App;
