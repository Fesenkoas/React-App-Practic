import React from "react";

const ShowItem = ({ item, addToOrders, onShowItem }) => {
  return (
    <div className="fullItem">
      <div>
        <img
          src={`./image/${item.img}`}
          alt=""
          onClick={() => onShowItem(item)}
        />
        <h2>{item.title}</h2>
        <p>{item.deck}</p>
        <b>{item.price}$</b>
        <div className="add-to-card" onClick={() => addToOrders(item)}>
          +
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
