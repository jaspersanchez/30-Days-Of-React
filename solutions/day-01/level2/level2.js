// Create a new file called 'countries.js' and add the following code
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// module.exports = countries;

// Create a new file called web_techs.js and add the following code:
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// module.exports = webTechs;

// In the main.js file, we can use these modules by importing them:
// const countries = require('./countries');
// const webTechs = require('./web_techs');

console.log(countries);
console.log(webTechs);

// First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
// console.log(words)
// console.log(words.length)
//["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
//13
//
// remove all punctuations
const removePunctuations = (text) => {
  return text.replace(/[^\w\s]/g, "").replace(/\s+/g, " ");
};

// assign words to the removePunctuations function that returns an array
const words = removePunctuations(text);

// console.log length
console.log(words.split(" ").length);

// In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
//add meat in the beginning of your shopping cart
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(3, 1);
shoppingCart.splice(2, 1, "Green Tea");

const isExists = countries.indexOf("Ethiopia");

if (isExists !== -1) {
  console.log("4", countries[isExists].toUpperCase());
} else {
  console.log("Country not found");
}

const isSassExists = webTechs.indexOf("Sass");

if (isExists !== -1) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log("5", webTechs);
}

// 6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);

console.log("6", fullStack);
