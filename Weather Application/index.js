const userTab = document.querySelector("[data-userWeather]");

const searchTab = document.querySelector("[data-searchWeather]");

const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(
  ".grant-location-container"
);

const searchForm = document.querySelector("[data-searchForm]");

const loadingScreen = document.querySelector(".loading-container");

const userInfoContainer = document.querySelector(".user-info-container");

let currentTab = userTab;
const apiKey = "50645afe7dc713ebcce15941bd98bf95";

currentTab.classList.add("current-tab");

function renderWeatherInfo(weatherInfo){
  const cityName= document.querySelector("[data-cityName]");
  const countryIcon= document.querySelector("[data-countryIcon]");
  const desc= document.querySelector("[data-weatherDesc]");
  const weatherIcon= document.querySelector("[data-weatherIcon]");
  const temp= document.querySelector("[data-temp]");
  const windSpeed= document.querySelector("[data-windSpeed]");
  const humidity= document.querySelector("[data-humidity]");
  const cloudiness= document.querySelector("[data-cloud]");
}

async function fetchUserWeatherInfo(coordinates){
  const {lat,lon}= coordinates;
  grantAccessContainer.classList.remove("active");
  loadingScreen.classList.add("active");
  try{
    const response= await fetch(` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const data=await response.json();
    loadingScreen.classList.remove("active");
    userInfoContainer.classList.add("active");
    renderWeatherInfo(data);
  }
  catch(err){
    loadingScreen.classList.remove("active");
  }
}


function getFromSessionStorage() {
  const localCoordinates = sessionStorage.getItem("user-coordinates");
  if (!localCoordinates) {
    grantAccessContainer.classList.add("active");
  } else {
    const coordinates = JSON.parse(localCoordinates);
    fetchUserWeatherInfo(coordinates);
  }
}

function switchTab(clickedTab) {
  if (clickedTab != currentTab) {
    currentTab.classList.remove("current-tab");
    currentTab = clickedTab;
    currentTab.classList.add("current-tab");

    if (!searchForm.classList.contains("active")) {
      userInfoContainer.classList.remove("active");
      grantAccessContainer.classList.remove("active");
      searchForm.classList.add("active");
    } else {
      searchForm.classList.remove("active");
      userInfoContainer.classList.remove("active");
      getFromSessionStorage();
    }
  }
}

userTab.addEventListener("click", () => {
  switchTab(userTab);
});
searchTab.addEventListener("click", () => {
  switchTab(searchTab);
});

// 50645afe7dc713ebcce15941bd98bf95

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// const response = await fetch(
//   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
// );
