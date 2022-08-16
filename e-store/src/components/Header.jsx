import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const Header = ({ orders, deleteOrder }) => {
  const [cardOpen, setCardOpen] = useState(false);

  const showItem = () => {
    let sum = 0;
    orders.forEach(el => sum += +el.price)
    return (
      <div>
       { orders.map((el) => <Order key={el.id} item={el} deleteOrder={deleteOrder} />)}
        <p className="sum">Summa: {sum}$ </p>
      </div>
    );
  };

  const showText = () => {
    return (
      <div className="empty">
        <h2>Empty</h2>
      </div>
    );
  };
  return (
    <header>
      <div>
        <span className="logo"> House Staff</span>
        <ul className="nav">
          <li>About Us</li>
          <li>Contact</li>
          <li>Profile</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCardOpen(!cardOpen)}
          className={`shop-button ${cardOpen && "active"}`}
        />

        {cardOpen && (
          <div className="shop-cart">
            {orders.length ? showItem() : showText()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
