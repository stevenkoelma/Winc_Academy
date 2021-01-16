
const age = 26;
const isFemale = false;
const driverStatus = 'BoB';
const name = 'Bram';
const totalAmount = 24.99;


// age
if (age === 18) 
{
console.log ("U mag naar binnen!");
} 


else {
    console.log ("Sorry, u mag niet naar binnen");
}


// ladiesNight
if (isFemale)  
{
console.log ("Welkom op onze ladiesnight!");
} else {
    console.log ("Helaas, geen ladiesnight voor u");
}

// driverStatus
if (driverStatus === 'BoB')
{
    console.log ("U mag zelf rijden")
} else { 
console.log ("U mag niet rijden")
}

// discount

if (age >= 18 && age <= 25) 
{
    console.log ("Proost, een biertje is voor de helft van de prijs!")
} else {
    console.log ("Helaas, geen korting voor jou!")
}

// nameCheck

if (name === 'Bram' || name == 'Sarah') 
{
    console.log ("Je krijgt een gratis biertje!")
} else {
    console.log ("Geen gratis bier voor jou")
}


//totalAmount
if (totalAmount < 25)
{
    console.log ("Geen korting")
}

if (totalAmount > 25 && totalAmount <= 50) 
{
    console.log ("Gratis (vega) bitterballen!")

}

if (totalAmount > 50 && totalAmount <= 99) 
{
console.log ("Gratis nacho's!")
}

if (totalAmount >= 100)
{
console.log ("CHAMPAGNE!")
} 

