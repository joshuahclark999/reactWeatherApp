import React from "react";

function WeatherDisplay(props){
    let desc = props.description;
    function capitalizeFirstLetter(desc) {
        return desc.charAt(0).toUpperCase() + desc.slice(1);
      }
    if(props.temp === ''){
        return <div></div>
    }
    return(
        <div>
            <h2>{props.temp}° F</h2>
            <h2>{props.humidity}% humidity</h2>
            <h2>{capitalizeFirstLetter(desc)}</h2>
        </div>
    )
};

export default WeatherDisplay;

