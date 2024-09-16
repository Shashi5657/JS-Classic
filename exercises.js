// alert("Good Morning");
// alert("Shashidhar");
// console.log(10 + 5);
// console.log(20 - 5);
// console.log(2 + 2 - 5);
// document.body.innerHTML

let summation = 10 + 3 * 8 + 5;
console.log(summation);
console.log(summation / 3);
let total = Math.round(1850 + 2 * 750) / 100;
console.log(total * 0.1);
console.log(Math.ceil(2.2));

//Normally round uses to round the decimal to the nearest integer
//Math.floor always round to the nearest lowest integer such as 2.8 => 2 or 3.9 => 3
console.log(Math.floor(3.9));

//Math.ceil always round to the highest integer such as 2.1 => 3 or 3.3 => 4
console.log(Math.ceil(3.3));

//to convert temp from cels to fahrenheit or reverse
// fahrenheit = (celcius * 9/5) + 32
// celcius = (fahrenheit -32) * 5/9
let tempInCelc = 33;
console.log(tempInCelc * (9 / 5) + 32);

// \ - escape CharacterData
// \n - new line character

// ====> Strings
let myName = "shashi";
console.log(myName);
console.log(`My name is ${myName}`);

let totalCost = 5 + 3;
console.log(`Total Cost: $${totalCost}`);
console.log(`Items(${2 + 2}): ${(2 * 2095 + 2 * 799) / 100}`);
console.log(`Shipping & handling: ${(499 + 499) / 100}`);
let clothesTotal = (2 * 2095 + 2 * 799) / 100;
let deliveryTotal = (499 + 499) / 100;
console.log(`Total before tax : ${clothesTotal + deliveryTotal}`);
let taxTotal = (clothesTotal + deliveryTotal) * 0.1;
console.log(`Estimated tax(10%): ${taxTotal}`);

let userName = "shashi";
console.log(`My name is ${userName}`);
const cost = 5 + 2 * 3 + 9;
console.log(`Cost of Food: $${cost}`);

const tax = cost * 0.1;
console.log(`Tax: $${tax}`);

const wholeCost = cost + tax;
console.log(`total cost: $${wholeCost}`);
