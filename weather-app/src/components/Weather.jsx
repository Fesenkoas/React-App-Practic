import React from 'react'

const Weather = ({message, info}) => {
    if(message){
        return(
            <div>
                <p>
                    {message}
                </p>
            </div>
        )
    }else{
  return (
    <div>
        <p>Location: {info.sys.country}, {info.name} </p>
        <p>Temp: {info.main.temp}</p>
        <p>Pressure: {info.main.pressure}</p>
        <p>Sunset: {info.sys.sunset}</p>
    </div>
  )}
}

export default Weather