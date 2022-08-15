import React, { useState } from "react";
import Form from "./Form";
import Weather from "./Weather";

const base_url = "https://api.openweathermap.org/data/2.5/weather";
const api_key = "a4024f31f9401302e6cbd31b53d3ecc5";

const Data = () => {
  const [info, setInfo] = useState();
  const [message, setMessage] = useState("Enter city name");

  const getWeather = (city) => {
    fetch(`${base_url}?q=${city}&appid=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
        setMessage("");
      })
      .catch((e) => setMessage("Enter correct city name"));
  };

  return (
    <div>
      <Form getWeather={getWeather} />
      <Weather info={info} message={message} />
    </div>
  );
};

export default Data;
