const generateJokeButton = document.querySelector(".button");
const jokeList = document.querySelector("#jokes");
const inputName = document.querySelector("#input-name");

inputName.addEventListener("keyup", (event) => {
  firstName = event.target.value;
});

generateJokeButton.addEventListener("click", async () => {
  if (inputName.value !== "") {
    const data = await getRandomJoke();
    const newJoke = document.createElement("li");
    const idJoke = document.createElement("li");
    newJoke.innerHTML = `${data.value.joke}`;
    idJoke.innerHTML = `id API = ${data.value.id}`;
    jokeList.append(newJoke, idJoke);
    jokeList.replaceChild(newJoke, jokeList.childNodes[0]);
    jokeList.replaceChild(idJoke, jokeList.childNodes[1]);
   
  } else alert("Please fill in your name");
});



