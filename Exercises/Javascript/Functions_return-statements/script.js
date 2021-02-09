const numberChecker = (number) => {
  if (number > 100) {
    return true;
  }
  if (number < 100) {
    return false;
  }
};

console.log(numberChecker(97));
console.log(numberChecker(107));

const entreeChecker = (age, max, current) => {
  if (age < 18) {
    console.log("This is a club for adults");
    return;
  }

  if (current < max) {
    console.log("Come in!");
    return;
  } else {
    console.log("It's too busy now, come back later");
  }
};

entreeChecker(17, 100, 99); // This is a club for adults
entreeChecker(18, 100, 99); // Come in!
entreeChecker(18, 100, 100); // It's too busy now, come back later

const calculateAverage = (...numbers) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const addNumbers = numbers.reduce(reducer);
  const average = addNumbers / numbers.length;
  return Math.round(average);
};

console.log(calculateAverage(5, 2));
console.log(calculateAverage(10, 4, 151, 22, 38));
