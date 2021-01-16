/* Array */
const superHeroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];

/* 1. Maak een array van alle superhelden namen */

const filterByName = (item) => {
    return item.map((hero) => hero.name);
  };
  
  console.log("Array met alle superhelden namen", filterByName(superHeroes));

/* 2. Maak een array van alle "lichte" superhelden (< 190 pounds) */

const lightSuperHeroes = (item) => {
  return item.filter((hero) => hero.weight < 190);
};

console.log(lightSuperHeroes(superHeroes));

/* 3. Maak een array met de namen van de superhelden die 200 pounds wegen  */

const mergeNameAndWeight = superHeroes
  .filter((hero) => {
    return hero.weight === "200";
  })
  .map((hero) => {
    return hero.name;
  });

console.log(mergeNameAndWeight);

/* 4. Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad */

const firstApperances = superHeroes.map(function (hero) {
  return hero.name + " - " + hero.first_appearance;
});

console.log(firstApperances);

/* 5. Maak een array met alle superhelden van DC Comics en daarna van Marvel Comics. */

const superHeroesAtDCComics = superHeroes
  .filter(function (hero) {
    return hero.publisher === "DC Comics";
  })
  .map(function (hero) {
    return hero.name;
  });

console.log("DC Comics:", superHeroesAtDCComics);

const superHeroesAtMarvelComics = superHeroes
  .filter(function (hero) {
    return hero.publisher === "Marvel Comics";
  })
  .map(function (hero) {
    return hero.name;
  });

console.log("Marvel Comics:", superHeroesAtMarvelComics);

/* 6. Tel het gewicht van alle superhelden van DC Comics bij elkaar op.  */

const DCComics = superHeroes
  .filter(function (hero) {
    return hero.publisher === "DC Comics";
  })

const getWeightsDC = DCComics.map((hero => {
  if (hero.weight !== "unknown") {
    return parseInt(hero.weight);
  } else {
    return 0;
  }
}));

  const totalWeightDC = function(){
    return getWeightsDC.reduce((x, y) => x + y);
  }
  
  console.log("Gewicht DC Comics", totalWeightDC(DCComics));


  /* 7. Tel het gewicht van alle superhelden van Marvel Comics bij elkaar op.  */

  const marvelComics = superHeroes
  .filter(function (hero) {
    return hero.publisher === "Marvel Comics";
  })

  const getWeightsMarvel = marvelComics.map((hero => {
    if (hero.weight !== "unknown") {
      return parseInt(hero.weight);
    } else {
      return 0;
    }
  }));

  const totalWeightMarvel = function(){
    return getWeightsMarvel.reduce((x, y) => x + y);
  }
  

  console.log("Gewicht Marvel Comics", totalWeightMarvel(marvelComics));




  


 