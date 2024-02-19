const modeBtn = document.querySelector("[modeBtn]");
const html = document.querySelector("html");
const darkText = document.querySelector("[darkText]");
const modeImg = document.querySelector("[modeImg]");
const mode = localStorage.getItem("mode");

if (mode) {
  html.classList.add("dark");
  darkText.innerText = "Light";
  modeImg.src = "assets/sun-icon.svg";
}else{
    html.classList.remove("dark");
}
modeBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.setItem("mode", html.classList.contains("dark"));
  if (html.classList.contains("dark")) {
    darkText.innerText = "Light";
    modeImg.src = "assets/sun-icon.svg";
  } else {
    darkText.innerText = "Dark";
    modeImg.src = "assets/moon-icon.svg";
  }
});

// const url = "https://api.github.com/users/";
