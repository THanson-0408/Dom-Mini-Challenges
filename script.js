"use strict";

//Number 1

let food = document.querySelectorAll(".food");
let grandTotal = document.querySelector(".total");

let total = 0;

food.forEach((button) => {
  button.addEventListener("click", () => {
    let sum = Number(button.getAttribute("data-amount"));
    total += sum;
    grandTotal.innerText = total;
  });
});

//Number 2---------------------------------

let form = document.querySelector(".make-money");
let coinContainer = document.querySelector(".coin-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = new FormData(form);
  let number = data.get("amount");
  let type = data.get("type");
  for (let i = 0; i < number; i++) {
    let newCoin = document.createElement("div");
    newCoin.classList.add(type, "coin");
    newCoin.innerText = type;
    coinContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
  form.reset();
});

//Number 3-----------------------------------

let light = document.querySelector(".light-bulb");
let onSwitch = document.querySelector(".on");
let offSwitch = document.querySelector(".off");
let toggle = document.querySelector(".toggle");
let end = document.querySelector(".end");

// //Turn light on
const lightOn = () => {
  light.classList.add("bright");
};
onSwitch.addEventListener("click", lightOn);

//Turn light off
const lightOff = () => {
  light.classList.remove("bright");
};
offSwitch.addEventListener("click", lightOff);

//Toggle light
const SwitchOnOff = () => {
  light.classList.toggle("bright");
};
toggle.addEventListener("click", SwitchOnOff);

//Remove light
const takeAway = () => {
  light.remove();
  let buttons = document.querySelectorAll(".switch");
  buttons.forEach((button) => {
    button.disabled = true;
  });
};
end.addEventListener("click", takeAway);

//Turn light on
// onSwitch.addEventListener("click", () => {
//   light.classList.add("bright");
// });
//Turn light off
// offSwitch.addEventListener("click", () => {
//   light.classList.remove("bright");
// });
//Remove light
// end.addEventListener("click", () => {
//   light.remove();
// });
