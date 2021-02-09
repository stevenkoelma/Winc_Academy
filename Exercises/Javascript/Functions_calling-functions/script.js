const ageChecker = (age) => {
  if (age >= 18) {
    return true;
  } else {
    console.log(false)
    return false;
    
  }
};

const greet = (age) => {
 const adult = ageChecker(true)
 const kiddo = ageChecker(false)
if (adult) {
    console.log ("Hi there")
    return
}
};


console.log(greet(18))
