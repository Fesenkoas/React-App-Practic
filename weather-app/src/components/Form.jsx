import React from 'react'

const Form = ({getWeather}) => {
    const handeleSubmit = (e) =>{
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        getWeather(city);
    }
  return (
    <form onSubmit={handeleSubmit}>
        <input type='text' name='city' placeholder='City'  />
        <button>Get weather</button>
    </form>
  )
}

export default Form