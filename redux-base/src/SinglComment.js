import React, { useEffect } from 'react'
import { useState } from 'react';

const SinglComment = ({data}) => {
  const [comment, setComment] = useState();
  const {text, id}= data;
  useEffect(()=>{
    if(text){
      setComment(text)
    }
  },[text])
  return (
    <form className='comments-item'>
        <div className='comments-item-delete'>&times;</div>
            <input type='text' value={comment}/>
            <input type ='submit' hidden/>
        </form>
  )
}

export default SinglComment