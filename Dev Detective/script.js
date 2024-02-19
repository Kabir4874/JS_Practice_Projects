const modeBtn = document.querySelector("[modeBtn]");
const html = document.querySelector("html");
const darkText = document.querySelector("[darkText]");
const modeImg = document.querySelector("[modeImg]");
let mode = localStorage.getItem("mode");
const form = document.querySelector("[form]");
const input = document.querySelector("[inputValue]");

// !Dark Mode
function setDarkMode() {
  html.classList.add("dark");
  darkText.innerText = "Light";
  modeImg.src = "assets/sun-icon.svg";
}
function setLightMode() {
  html.classList.remove("dark");
  darkText.innerText = "Dark";
  modeImg.src = "assets/moon-icon.svg";
}
function toggleMode() {
  if (html.classList.contains("dark")) {
    setLightMode();
    localStorage.setItem("mode", "light");
  } else {
    setDarkMode();
    localStorage.setItem("mode", "dark");
  }
}
if (mode === "light") {
  setLightMode();
} else {
  setDarkMode();
}
let userName;
modeBtn.addEventListener("click", toggleMode);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  userName = input.value;
  console.log(userName);
  apiCall();
});

async function apiCall() {
  const response = await fetch(`https://api.github.com/${userName}/"`);
  const data = response.json();
  console.log(data);
}
// const url = "https://api.github.com/users/";
