// Write a function named calculateSupply that:
// 
// - takes 2 arguments: age, amount per day.
// - calculates the amount consumed for rest of the life (based on a constant max age).
// - outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.


const calculateSupply = function (age, perDay) {
    let maxAge = 100;
    let total = perDay * 365 * (maxAge - age);
    console.log(" You will need cups of coffee " + total + " to last you until the ripe old age of " + maxAge + "." )
};

calculateSupply (5, 5);
calculateSupply (1, 5);
calculateSupply (500, 50);
