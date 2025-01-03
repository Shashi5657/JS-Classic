// alert("Good Morning");
// alert("Shashidhar");
// console.log(10 + 5);
// console.log(20 - 5);
// console.log(2 + 2 - 5);
// document.body.innerHTML

///****** Math methods  ******/
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

//******** */ ====> Strings   *********///
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

//******** */ Falsy values ****///
//  false 0, '', Nan, undefined, null

const currentDate = new Date();
const hour = currentDate.getHours();
if (hour > 6 && hour <= 12) {
  console.log(`Good Morning ${userName}`);
} else if (hour > 12 && hour <= 17) {
  console.log(`Good Afternoon ${userName}`);
} else {
  console.log(`Good Night ${userName}`);
}

const age = 5;
const isHoliday = true;
if ((age < 6 || age > 65) && !isHoliday) {
  console.log("Discount");
} else {
  console.log("No Discount");
}

//////**** Functions *******///////

const greet = (name = "there") => {
  console.log(`hello ${name}`);
};

greet("shashi");
greet("vinay");
greet();

const convertToFahrenheit = (celcius) => {
  const fahrenheit = (celcius * 9) / 5 + 32;
  return fahrenheit;
};

console.log(convertToFahrenheit(41));

const convertLength = (length, from, to) => {
  if (from !== "km" && from !== "miles" && from !== "ft") {
    return `Invalid unit: ${from}`;
  } else if (to !== "km" && to !== "miles" && to !== "ft") {
    return `Invalid unit: ${to}`;
  }

  if (from === "km" && to === "miles") {
    return `${length / 1.6} ${to}`;
  } else if (from === "km" && to === "ft") {
    return `${length * 3281} ${to}`;
  } else if (from === "miles" && to === "km") {
    return `${length * 1.6} ${to}`;
  } else if (from === "miles" && to === "ft") {
    return `${length * 5280} ${to}`;
  } else if (from === "ft" && to === "km") {
    return `${length / 3281} ${to}`;
  } else if (from === "ft" && to === "miles") {
    return `${length / 5280} ${to}`;

    // You can also do if (from === 'km' && to === 'km) { ... }
    // if (from === to) is a trick you can use to save some code.
  } else if (from === to) {
    return `${length} ${to}`;
  }
};

// console.log(convertLength(50, "miles", "km"));
// console.log(convertLength(32, "km", "miles"));
// console.log(convertLength(50, "km", "km"));

// console.log(convertLength(5, "miles", "km"));
// console.log(convertLength(5, "miles", "ft"));
// console.log(convertLength(5, "km", "ft"));

// console.log(convertLength(5, "lbs", "lbs"));

//****** Objects ******//

const product1 = {
  name: "basketball",
  price: 3095,
};

const product2 = {
  name: "volleyball",
  price: 3000,
};

const product3 = {
  name: "volleyball",
  price: 3000,
};

// product.price += 500;

// product["delivery-time"] = "3 days";

// console.log(product1);

const comparePrice = (product1, product2) => {
  if (product1.price < product2.price) {
    return product1;
  } else {
    return product2;
  }
};

// console.log(comparePrice(product1, product2));

const isSameProduct = (product1, product2) => {
  if (product1.name === product2.name && product2.price === product2.price) {
    return true;
  } else {
    return false;
  }
};

// console.log(isSameProduct(product3, product2));

const wish = "Happy New Year. ";

// console.log(wish.toLowerCase());
console.log(wish.repeat(3));
