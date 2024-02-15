console.log("Hello");

async function showWeather() {
  try {
    let city = "goa";
    const apiKey = "50645afe7dc713ebcce15941bd98bf95";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    const data = await response.json();
    console.log("Weather Data:->", data);

    let newPara = document.createElement("p");
    newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;
    document.body.appendChild(newPara);
  } catch (e) {
    console.log(e);
  }
}
showWeather();

// 50645afe7dc713ebcce15941bd98bf95

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
