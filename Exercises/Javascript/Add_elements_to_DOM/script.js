// Deel 1 - Elementen toevoegen aan de DOM
// Opdracht: Wanneer ik als gebruiker op een button van één van de Big 5 klik, wil ik dat die verschijnt in mijn lijstje met "animals spotted".

const animalIsSpotted = (event) => {
  const newListItem = document.createElement("li");
  const spotted = event.target.innerHTML;
  newListItem.appendChild(document.createTextNode(spotted));
  const addToSpottedAnimalsList = document.getElementById(
    "spotted-animals-list"
  );
  addToSpottedAnimalsList.appendChild(newListItem);
};

const selectBigFiveItem = document.querySelectorAll(".big-five-button");
const moveAnimalToSpotted = selectBigFiveItem.forEach(function (animalButton) {
  animalButton.addEventListener("click", animalIsSpotted);
});

// Deel 2 - 1 element verwijderen uit de DOM
// Opdracht: Wanneer ik als gebruiker op de "remove the first item" knop klik wordt de eend die ik op mijn tocht naar het vliegveld heb gespot verwijderd (het is toch een beetje een vreemde eend in dit lijstje van de big five). De gebruiker kan op deze knop blijven klikken, telkens wordt het eerste item verwijderd.

const removeFirstChild = () => {
  const selectSpottedList = document.querySelector("#spotted-animals-list");
  const selectFirstChild = selectSpottedList.getElementsByTagName("li")[0];
  const removeChild = selectSpottedList.removeChild(selectFirstChild);
};

const selectRemoveFirstButton = document.querySelector(
  "#remove-first-item-button"
);
const removeFirstButton = selectRemoveFirstButton.addEventListener(
  "click",
  removeFirstChild
);

// Deel 3 - Meerdere element verwijderen uit de DOM
// Opdracht: Wanneer ik als gebruiker op de "remove all spotted animals" knop klik worden alle dieren die ik heb gespot verwijderd.

const removeAllAnimalsFromSpotted = () => {
  const spottedAnimalsList = document.querySelector("#spotted-animals-list");
  while (spottedAnimalsList.firstChild){
    spottedAnimalsList.removeChild(spottedAnimalsList.firstChild);
  }
};

const selectRemoveAllButton = document.querySelector("#remove-all-button");
const removeAllButton = selectRemoveAllButton.addEventListener(
  "click",
  removeAllAnimalsFromSpotted
);
