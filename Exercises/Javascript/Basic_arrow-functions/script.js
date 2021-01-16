// zet de functie om naar een arrow functie

const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };
  
  ikRockArrowFunctions()

//   Deel A: Bekijk de bovenstaande functie. Bouw deze functie om tot een arrow function
const ikRockArrowFunctions2 = () => {console.log ("Joe ik rock de arrow functions!")};

ikRockArrowFunctions2 ()

// Deel B: Opdracht: schrijf de onderstaande functie om naar een arrow functie op 1 regel.

const fivePlusSeven = function () {
    return 5 + 7
  };
  
  console.log  (fivePlusSeven());

// ARROW FUNCTION
const fivePlusSevenArrow = () => 5+7

console.log (fivePlusSevenArrow());

// DEEL C Schrijf een arrow function, op 1 regel (dus met een impliciete return statement), die de params a en b bij-elkaar optelt. Noem de 
const myFunction = (a, b) => a + b;

console.log (myFunction (5, 5));

// DEEL D Opdracht: Schrijf een arrow function op 1 regel, die de parameter a behoudt, en altijd a plus 5 returned. Noem de functie addFive.

const addFive = a => a + 5;

console.log (addFive (32));

// DEEL E Opdracht: Schrijf een arrow function met de naam createObject met een implicit return statement (dus op 1 regel) die een simpel object returned: {greeting: "hoi"}

const createObject = () => ({value: "hoi"});

console.log (createObject)


