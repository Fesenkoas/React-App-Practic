import React, { useState } from 'react'
import { categoriesItem } from '../unit/constant'

const Categories = ({chooseCategory}) => {
    const [categories, setCategories] =useState(categoriesItem)
  return (
    <div className='categories'>
{categories.map(el => (
    <div key={el.id} onClick={()=>chooseCategory(el.key)}>{el.name}</div>
))}
    </div>
  )
}

export default Categories