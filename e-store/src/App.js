import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { constItems } from "./unit/constant";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowItem from "./components/ShowItem";

const App = () => {
  const [showItems, setShowItems] = useState(false);
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState(constItems);
  const [fullItem, setFullItem] =useState({})

  const addToOrders = (item) => {
    let isArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) isArray = true;
    });
    if (!isArray) setOrders([...orders, item]);
  };

  const deleteOrder = (id) => {
    console.log(id);
    const res = orders.filter((el) => el.id !== id);
    console.log(res);
    setOrders(res);
  };

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(constItems);
      return;
    }
    const arrItem = constItems.filter((el) => el.category === category);
    setCurrentItems(arrItem);
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowItems(!showItems);
  };

  return (
    <div className="wrapper">
      <Header orders={orders} deleteOrder={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items items={currentItems} onShowItem={onShowItem} addToOrders={addToOrders} />
      {showItems && <ShowItem item={fullItem} onShowItem={onShowItem} addToOrders={addToOrders}/>}
      <Footer />
    </div>
  );
};

export default App;
