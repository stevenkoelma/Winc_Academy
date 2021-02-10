const ageChecker = (age) => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

const greet = (age) => {
  if (ageChecker(age)) {
    return "Hi there";
  } else {
    return "Hi kiddo";
  }
};

console.log(greet(17));
console.log(greet(18));

const calculateVAT = (baseprice, percentage) => baseprice * (percentage / 100)

const calculatePriceWithVAT = (baseprice, percentage) => {
  const VAT = calculateVAT(baseprice, percentage);
  return baseprice + VAT;
}

console.log(calculatePriceWithVAT(1000, 21))
console.log(calculatePriceWithVAT(1000, 9))
console.log(calculatePriceWithVAT(1000, 0))


const calculateBasePrice = (priceWithVAT, percentage) =>  priceWithVAT / ((100 + percentage) / 100)
console.log(calculateBasePrice(1210, 21))

const calculateBasePriceAndVAT = (priceWithVAT, percentage) => {
  const basePrice = calculateBasePrice(priceWithVAT, percentage)
  const VAT = priceWithVAT - basePrice
 return [basePrice, VAT]
}

console.log(calculateBasePriceAndVAT(120, 21))
