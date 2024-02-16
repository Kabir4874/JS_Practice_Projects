const userTab= document.querySelector("[data-userWeather]");

const searchTab= document.querySelector("[data-searchWeather]");

const userContainer= document.querySelector(".weather-container");

const grantAccessContainer= document.querySelector(".grant-location-container");

const searchForm= document.querySelector("[data-searchForm]");

const loadingScreen= document.querySelector(".loading-container");

const userInfoContainer= document.querySelector(".user-info-container");

let currentTab= userTab;
const apiKey= '50645afe7dc713ebcce15941bd98bf95';

currentTab.classList.add("current-tab");












































// 50645afe7dc713ebcce15941bd98bf95

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// const response = await fetch(
//   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
// );