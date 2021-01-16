const countrylist = document.getElementById("countrylist");
const capricornfemales = document.getElementById("capricornfemales");

/* Subopdracht: landenlijst - 1 punt
Maak een lijst van alle landen, gesorteerd op naam van het land. */

const makeCountryArray = () => {
  const countries = PersonData.map((country) => country.region);
  return countries.sort();
};

const countriesToDom = (array) => {
  let listItems = array.map((country) => {
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `${country}`;
    return newListItem;
  });

  listItems.forEach((country) => {
    countrylist.append(country);
  });
};

countriesToDom(makeCountryArray(PersonData));

// Subopdracht: steenbokvrouwen - 3 punten

const isFemale = PersonData.filter((person) => person.gender === "female");
const isOlderThan30 = isFemale.filter((person) => person.age > 30);

const isCapricorn = isOlderThan30.filter((person) => {
  const birthdayDay = parseInt(person.birthday.dmy.split("/")[0]);
  const birthdayMonth = parseInt(person.birthday.dmy.split("/")[1]);
  if ((person = birthdayMonth === 12 && birthdayDay > 22)) return person;
  else if ((person = birthdayMonth === 1 && birthdayDay <= 19)) return person;
});
console.log(isCapricorn);

const compareByName = (person1, person2) => {
  if (person1.name < person2.name) return -1;
  if (person1.name > person2.name) return 1;
  return 0;
};

const capricornFemalesSortedByName = isCapricorn.sort(compareByName);

const capricornFemalesToDom = (array) => {
  let listItems = array.map((person) => {
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `${person.name} ${person.surname}, photo: ${person.photo}`;
    return newListItem;
  });

  listItems.forEach((country) => {
    capricornfemales.append(country);
  });
};

capricornFemalesToDom(isCapricorn);
