// OPDRACHT 1

const buttonAlert = document.getElementById("mybutton");

buttonAlert.addEventListener("click", function () {
  alert("Er is geklikt");
});

// OPDRACHT 2

const body = document.querySelector(".blue-background");
const changeColorButton = document.querySelector("#change-background-button");

const addRed = () => {
  body.classList.toggle("red-background");
};

changeColorButton.addEventListener("click", addRed);

// Syntax: Element.addEventListener(event, function, useCapture)


// const body = document.body ()
// const changeColor = document.querySelectorAll ('li');

// const addToggle = () => {
//   body.classList.toggle("red-background")
// }

// changeColor.addEventListener('click', addToggle);

buttonalert.classList.remove("green-background");


