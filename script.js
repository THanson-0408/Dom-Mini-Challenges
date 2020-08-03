"use strict";

//Number 1

let food = document.querySelectorAll(".food");

let total = 0;

food.forEach((button) => {
  button.addEventListener("click", () => {
    let sum = parseInt(button.getAttribute("data-amount"));
    total += sum;
    let grandTotal = document.querySelector(".total");
    grandTotal.innerText = total;
  });
});

//Number 2

let moneyButton = document.querySelector(".moneybtn");
moneyButton.addEventListener("click", (even) => {
  event.preventDefault();
});

//Number 3

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
};
end.addEventListener("click", takeAway);

// //Turn light on
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
