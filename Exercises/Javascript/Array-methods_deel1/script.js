// A Schrijf een JavaScript functie om het woord "cool" aan een array met strings toe te voegen

const words = ["nice", "happy", "laugh"]
console.log (words);

const addCool = words.push('cool');
console.log (words);

// B Schrijf een JavaScript functie die het aantal elementen in een array retourneert.

let clubs = ["psv", "feyenoord", "az"];
console.log (clubs)

const returnLengthClubs = clubs.length;
console.log (returnLengthClubs);

// C Schrijf een JavaScript functie om het éérste element uit een array te retourneren

const returnFirstClub = clubs[0];
console.log (returnFirstClub);

// D Schrijf een JavaScript functie om het laatste element uit een array te retourneren.

const returnLastClub = clubs [clubs.length -1];
console.log (returnLastClub);

// E Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren . Gebruik .slice én de alternatieve optie .splice

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
console.log (presidents)

const deleteFirstPresident = presidents.slice(1);
console.log (deleteFirstPresident);

const deleteFirstPresidentBySplice = presidents.splice(0, 1, 'Biden');
console.log (presidents);

// F Write a simple JavaScript program to join all elements of the following array into a string (with spaces)

const stringArray = ["Winc", "Academy", "is", "leuk"]
console.log (stringArray)

const mergeStringWithSpaces = stringArray.join(" ");
console.log (mergeStringWithSpaces);

// G Schrijf een functie die 2 arrays combineert tot 1 array
const concatArrays = clubs.concat(presidents);
console.log (concatArrays);

