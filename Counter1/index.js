const counter = document.getElementById("counter");

const increment = () => {
  let value = parseInt(counter.innerText);
  value++;
  counter.innerText = value;
};

const decrement = () => {
  let value = parseInt(counter.innerText);
  value--;
  counter.innerText = value;
};
