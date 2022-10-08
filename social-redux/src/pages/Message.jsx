import React from 'react'
import { useEffect } from 'react';
import { getListNewMessageFetch, setMessageUserFetch } from '../future/action/getDialogFetch';
import { useDispatch } from 'react-redux';
import { getListDialogFetch } from './../future/action/getDialogFetch';


export const Message = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getListNewMessageFetch())
    dispatch(getListDialogFetch(2))
  },[dispatch])
  return (
    <div>Message</div>
  )
}
