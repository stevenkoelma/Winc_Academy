/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
*/

const testNum = (number) => {
  return new Promise ((resolve, reject) => {

    if (number < 10) {
      resolve (number + ' is kleiner dan 10');

    } else {
      reject (number + ' is groter dan 10');

    }

  })

};

testNum(9)
.then (result => console.log(result))
.catch (error => console.log(error))


testNum(1000)
.then (result => console.log(result))
.catch (error => console.log(error))
 
  



/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (words) => {
  return new Promise ((resolve, reject) => {
    if (words.every(word => typeof word === 'string')) {
      resolve (words.map(word => word.toUpperCase()))
    }
    else {
      reject("Error: Geen string")
    }

  })
}; 
const sortWords = (words) => {
  return new Promise ((resolve, reject) => {
    if (words) {
   resolve (words.sort())
    }
    else {
      reject("Error: Geen string!")
    }
  })
};

makeAllCaps(arrayOfWords)
.then (result => (sortWords(result))
.then (result => console.log(result))
.catch (error => console.log(error)))

makeAllCaps(complicatedArray)
.then (result =>(sortWords(result)))
.then (result => console.log(result))
.catch (error => console.log(error))




