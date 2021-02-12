
import React from "react";
//import logo from './logo.svg';
import './App.css';

import CityInput from "./Components/CityInput";
import CityWeather from"./Components/CityWeather";


function App() {

  const [city,setCity]=React.useState("");

  const [cityWeather,setCityWeather]=React.useState({});

  const fetchCityWeather=()=>{
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
    )
    // .then(response=>response.json())
    .then((res)=>res.json())
    .then((result)=>{
      // console.log("Result is ",result)

      setCityWeather(result);
    });
  };

  return (
    <>
    <CityInput 
    city={city} 
    setCity={setCity} 
    fetchCityWeather={fetchCityWeather}/>
    {/* */}
    {/*Use city weather Data to show it on the screen */}
    console.log("Result is ",result)
    </>
  
  );
}

export default App;
