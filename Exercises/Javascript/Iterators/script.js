//  WHILE LOOP

let colors = ['yellow', 'red', 'blue', 'orange']
let i = 0;
while (i < colors.length) {
    console.log (colors[i]);
    i++;
}
console.log ("Check!");

// FOR LOOP

let colors = ['yellow', 'red', 'blue', 'orange']

for (i = 0; i < colors.length; i++) {
    console.log (colors[i]);

}

console.log ("Check!");

// ARRAY METHODS

let colors = ['yellow', 'red', 'blue', 'orange'];

colors.forEach (index => console.log(index));

// LOOPING OBJECT

let testObject = {
    name: 'Steven',
    age: '28',
    place: 'Wolvega',
    club: 'sc Heerenveen',
    sport: 'korfbal'
}

let objectKeys = Object.keys (testObject);

console.log (objectKeys);

for (x = 0; x < objectKeys.length; x++) {

    console.log(objectKeys[x]);
}
console.log("Check")









