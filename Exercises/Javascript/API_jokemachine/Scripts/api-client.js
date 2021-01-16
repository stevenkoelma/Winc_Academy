let firstName = null;

const getRandomJoke = async () => {
  const url = `http://api.icndb.com/jokes/random?firstName=${firstName}`;
  try {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
