// //Variables
let number = null;
let name;
let bet;
const min = 0;
const max = 10;


name = prompt ("Welkom, wat is je naam?");


alert  ("Hey " + name + " ! Succes met raden!");

number = Math.floor(Math.random() * (max - min) + min);


while (bet !== number) {

bet = prompt ("Voer hier een getal tussen de 0 en 10 in");

if (bet < number ) {
    alert (bet + " is te laag. Doe nog een poging!");
    } else if (bet > number) {
        alert (bet + " is te hoog. Doe nog een poging!");
    }   else {
        alert ("Yes, je hebt het goede getal geraden!");
        alert ("Het spel is geëindigd. Tot de volgende keer " + name);
    }
 }





