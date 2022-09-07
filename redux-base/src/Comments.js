import React, { useState } from "react";
import SinglComment from "./SinglComment";
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid'
import { commentCreate } from "./redux/action";

const Comments = () => {
    const  [ text, setText ] = useState("");
    const dispatch = useDispatch();
    const comments = useSelector(state =>{
        const{commentsReducer} = state;
        return commentsReducer.comments;
    })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(text, id));
  };

  const hendleInput = (e) =>{
    setText(e.target.value)
  }
  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input
          type="text"
          value={text}
          onChange={hendleInput}
        />
        <input type="submit" hidden />
      </form>
      {comments.lenght ?? comments.map(res =>{
        return <SinglComment key={res.id} data={res}/>
      })}
      {/* <SinglComment /> */}
    </div>
  );
};

export default Comments;
