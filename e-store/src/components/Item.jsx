import React from "react";

const Item = ({ item, addToOrders, onShowItem }) => {
  return (
    <div className="item">
      <img src={`./image/${item.img}`} alt="" onClick = {()=>onShowItem(item)} />
      <h2>{item.title}</h2>
      <p>{item.deck}</p>
      <b>{item.price}$</b>
      <div className="add-to-card" onClick={()=>addToOrders(item)}>+</div>
    </div>
  );
};

export default Item;
