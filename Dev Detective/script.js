const modeBtn = document.querySelector("[modeBtn]");
const html = document.querySelector("html");
const darkText = document.querySelector("[darkText]");
const modeImg = document.querySelector("[modeImg]");
let mode = localStorage.getItem("mode");
const form = document.querySelector("[form]");
const input = document.querySelector("[inputValue]");
const avatar = document.querySelector("[avatar]");
const displayName = document.querySelector("[displayName]");
const login= document.querySelector("[login]");
const  about= document.querySelector("[about]");
const repo= document.querySelector("[repo]");
const followers= document.querySelector("[followers]");
const following= document.querySelector("[following]");
const Location = document.querySelector("[location]");
const link= document.querySelector("[link]");
const twitter= document.querySelector("[twitter]");
const company= document.querySelector("[company]");

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

async function apiCall() {
    const response = await fetch(`https://api.github.com/users/` + userName);
    const data = await response.json();
    console.log(data);
    render(data);
  }
let userName;
modeBtn.addEventListener("click", toggleMode);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  userName = input.value;
  console.log(userName);
  apiCall();
});

function render(data) {
  avatar.src = `${data.avatar_url}`;
  displayName.innerText = `${data.name}`;
  login.innerText= `@${data.login}`;
  about.innerText= `${data.bio}`;
  repo.innerText=`${data.public_repos}`;
  followers.innerText=`${data.followers}`;
  following.innerText= `${data.following}`;
  Location.innerText= `${data.location}`;
  company.innerText=`${data.company}`;
}


// const url = "https://api.github.com/users/";
