
// Schrijf een simpele functie die meerdere cijfers bij elkaar optelt

const sumRest = (...numbers) => {
return  numbers.reduce((total, sum) => {
return total + sum
  })
}

console.log(sumRest(1,2,3,4,5,6))

const numbers = [1,2,3]

// Schrijf een simpele functie die meerdere cijfers bij elkaar optelt

const sumSpread = (number1, number2, number3) => {
  return number1 + number2 + number3
}

console.log (sumSpread(...numbers))
