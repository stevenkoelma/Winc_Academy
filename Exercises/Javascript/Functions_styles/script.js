const sum1 = (number1, number2) => {
  const multiple1 = number1 * number1;
  const multiple2 = number2 * number2;
  const addingUp = multiple1 + multiple2;
  const result = addingUp * addingUp;
  return result;
};

console.log(sum1(1, 2));

function sum2(number1, number2) {
  const multiple1 = number1 * number1;
  const multiple2 = number2 * number2;
  const addingUp = multiple1 + multiple2;
  const result = addingUp * addingUp;
  return result;
}

console.log(sum2(1, 2));

const sum3 = function (number1, number2) {
  const multiple1 = number1 * number1;
  const multiple2 = number2 * number2;
  const addingUp = multiple1 + multiple2;
  const result = addingUp * addingUp;
  return result;
};

console.log(sum3(1,2));