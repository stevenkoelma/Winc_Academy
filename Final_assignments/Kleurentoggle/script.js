const setBackground = document.querySelector("body");
const changeColorToDefault = document.querySelector("li:nth-child(1)");
const changeColorToRed = document.querySelector("li:nth-child(2)");
const changeColorToOrange = document.querySelector("li:nth-child(3)");
const changeColorToPurple = document.querySelector("li:nth-child(4)");
const changeColorToGreen = document.querySelector("li:nth-child(5)");
const selectMenuContent = document.querySelector(".dropdown-content");
const hoverHamburger = document.getElementsByTagName("img")[0];
let changeTextToColorName = document.querySelector(".text");

changeColorToDefault.addEventListener("click", function () {
  setBackground.classList.add("default-background");
  setBackground.classList.remove("red-background");
  setBackground.classList.remove("orange-background");
  setBackground.classList.remove("purple-background");
  setBackground.classList.remove("green-background");
  changeTextToColorName.textContent = "Standaard kleur";
});

changeColorToRed.addEventListener("click", function () {
  setBackground.classList.add("red-background");
  setBackground.classList.remove("orange-background");
  setBackground.classList.remove("purple-background");
  setBackground.classList.remove("green-background");
  setBackground.classList.remove("default-background");
  changeTextToColorName.textContent = "ROOD";
});

changeColorToOrange.addEventListener("click", function () {
  setBackground.classList.add("orange-background");
  setBackground.classList.remove("red-background");
  setBackground.classList.remove("purple-background");
  setBackground.classList.remove("green-background");
  setBackground.classList.remove("default-background");
  changeTextToColorName.textContent = "ORANJE";
});

changeColorToPurple.addEventListener("click", function () {
  setBackground.classList.add("purple-background");
  setBackground.classList.remove("red-background");
  setBackground.classList.remove("orange-background");
  setBackground.classList.remove("green-background");
  setBackground.classList.remove("default-background");
  changeTextToColorName.textContent = "PAARS";
});

changeColorToGreen.addEventListener("click", function () {
  setBackground.classList.add("green-background");
  setBackground.classList.remove("red-background");
  setBackground.classList.remove("orange-background");
  setBackground.classList.remove("purple-background");
  setBackground.classList.remove("default-background");
  changeTextToColorName.textContent = "GROEN";
});

hoverHamburger.addEventListener("mouseover", () => {
  selectMenuContent.classList.remove("menu-closed");
});

selectMenuContent.addEventListener("click", () => {
  selectMenuContent.classList.add("menu-closed");
});
