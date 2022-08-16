import React from 'react'
import Item from './Item';

const Items = ({items, addToOrders, onShowItem}) => {
  return (
    <main>
        {items.map(el =>(
            <Item key={el.id} item={el} addToOrders={addToOrders} onShowItem={onShowItem}/>
        ))}
    </main>
  )
}

export default Items