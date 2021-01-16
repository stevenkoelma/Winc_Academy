// A Schrijf een JavaScript functie die een bepaald item weet te vinden en terug geeft op basis van een bepaalde value.

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

const findSpiderman = function (superheroes) {
  return superheroes.find(function (hero) {
    return hero.name === "Spiderman";
  });
};

console.log(findSpiderman(superheroes));

const findSpiderMan = (superheroes) => {
  return superheroes.find((hero) => hero.name === "Spiderman");
};

// B In een array met integers. Zorg dat je een array returned met de integers verdubbeld.

const array = [1, 2, 3];

const doubleArray = function () {
  return array.map((number) => number * 2);
};

console.log(doubleArray(array));

// C Schrijf een JavaScript functie die checkt of er een nummer (integer) in de array aanwezig is dat groter is dan 10.

const containsNumberBiggerThan10 = function (number) {
  return number.some((number) => number > 10);
};

console.log(
  "Is er een nummer groter dan tien?",
  containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
);

// D Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" in de array aanwezig is.

const isItalyInTheGreat7 = function (country) {
  return country.includes("Italy");
};

console.log(
  "Behoort Italië tot de grote zeven?",
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
  ])
);

// E In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt.

const array = [1, 4, 3, 6, 9, 7, 11];

const tenfold = function (numbers) {
  return array.map((number) => number * 10);
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));

// F Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn, en true or false retourneert.

const isBelow100 = function (number) {
  return number.every((number) => number < 100);
};

console.log(
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);

// G Schrijf een JavaScript functie die alle waardes in de array bij elkaar optelt en het totaal van de som retourneer

const arrayReduce = [
  1,
  81,
  4,
  53,
  3,
  6,
  79,
  2,
  43,
  7,
  28,
  11,
  77,
  84,
  98,
  101,
  206,
  234,
];

const bigSum = function (numbers) {
  return numbers.reduce((total, currentNumber) => total + currentNumber);
};

console.log(bigSum(arrayReduce));
