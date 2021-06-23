import React, { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Icons from "./components/icons";
import WeatherDisplay from "./components/weather-display";
import "./styles.css";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#DDDDDD",
        contrastText: "#222831",
      },
    },
  });
  //declare weatherData for global scope
  
  //set cityName and input text states from empty string to whatever user inputs.
  const [cityName, setCity] = useState("");
  const [inputText, setInputText] = useState("");
  const  [weatherData, setWeatherData] = useState({
    main: {
      temp: '',
      humidity: '',
      name: '',
      feels_like: ''
    },
    weather: [{
      desc: ''
    }]
  });
  //updates state of inputText to whatever user is entering
  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  // set h1 display/cityName to inputText value and make an axios get request to weather api.
  const handleClick = () => {
    axios
      //get data
      .get(
        "https://api.openweathermap.org/data/2.5/find?q=" +
          inputText +
          "&appid=ce6308b177d61e9bb3c46eab3e6833e9&units=imperial"
      )
      //use data
      .then((res) => {
        setWeatherData(res.data.list[0]);
        console.log(weatherData)
      })
      .then(()=>{
        setCity(inputText + ':');
        setInputText("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div>
      <ThemeProvider theme={theme}>
        
        <h3>Enter a city</h3>
        <TextField
          id="outlined-secondary"
          label="Your hometown."
          variant="outlined"
          color="primary"
          className="input"
          onChange={handleChange}
          value={inputText}
        />
        <Button className="btn" variant="contained" color="primary" onClick={handleClick}>
          Click me
        </Button>
        <h1>{cityName}</h1>
        <WeatherDisplay
           city={weatherData.name} 
           temp={weatherData.main.temp} 
           humidity={weatherData.main.humidity}
           description={weatherData.weather[0].description} 
           feelsLike={weatherData.main.feels_like}
        />
        <Icons />
      </ThemeProvider>
    </div>
  );
}

export default App;
