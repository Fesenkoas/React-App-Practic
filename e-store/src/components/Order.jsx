import React from "react";
import{FaTrash} from 'react-icons/fa'

const Order = ({ item, deleteOrder }) => {
  return (
    <div className="item">
      <img src={`./image/${item.img}`} alt="" />
      <h2>{item.title}</h2>
      <b>{item.price}$</b>
      <FaTrash className="delIcon" onClick={()=> deleteOrder(item.id)}/>
    </div>
  );
};

export default Order;
