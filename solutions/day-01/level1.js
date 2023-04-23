//Completed Today
//Declare an empty array;
const emptyArr = [];
console.log("empty arr", emptyArr);
//Declare an array with more than 5 number of elements
const fiveElem = [1, 2, 3, 4, 5];
console.log("five elem arr", fiveElem);
//Find the length of your array
const arrLength = fiveElem.length;
console.log("arr length", arrLength);
//Get the first item, the middle item and the last item of the array
// first
const firstItem = fiveElem[0];
console.log("first item", firstItem);
//middle
const middleItem = fiveElem[Math.floor(arrLength / 2)];
console.log("middle item", middleItem);
//last
const lastItem = fiveElem[arrLength - 1];
console.log("last item", lastItem);
//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  [1, 2, 3],
  "string",
  1,
  true,
  null,
  undefined,
  { vale: 1 },
];
console.log("diff data types array", mixedDataTypes);
//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log("IT Companies", itCompanies);
//Print the array using console.log()
console.log("Print Array", itCompanies);
//Print the number of companies in the array
console.log("Number of Companies", itCompanies.length);
//Print the first company, middle and last company
//first
console.log("first company", itCompanies[0]);
//middle
console.log("middle company", itCompanies[Math.floor(itCompanies.length / 2)]);
//last
console.log("last company", itCompanies[itCompanies.length - 1]);
//Print out each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log("company", i + 1, itCompanies[i]);
}
//Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  console.log("company to uppercase", i + 1, itCompanies[i].toUpperCase());
}
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join());
//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const checkCompany = (company) => {
  if (itCompanies.indexOf(company) !== -1) {
    return company;
  } else {
    return "Company is not found";
  }
};
console.log("Bezosmazon", checkCompany("Bezosmazon"));
console.log("Company Exists", checkCompany("Amazon"));
//Filter out companies which have more than one 'o' without the filter method
const filteredCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
  let oCount = 0;
  for (let j = 0; j < itCompanies[i].length; j++) {
    if (itCompanies[i][j] === "o") {
      oCount++;
    }
  }
  if (oCount === 2) {
    filteredCompanies.push(itCompanies[i]);
  }
}
console.log(filteredCompanies);
//Sort the array using sort() method
const itCompaniesSort = [...itCompanies].sort();
console.log("Sorted", itCompaniesSort);
//Reverse the array using reverse() method
const itCompaniesReverse = itCompaniesSort.reverse();
console.log("Reversed", itCompaniesReverse);
//Slice out the first 3 companies from the array
console.log("first three companies", itCompanies.slice(0, 3));
//Slice out the last 3 companies from the array
console.log("last three companies", itCompanies.slice(itCompanies.length - 3));
//Slice out the middle IT company or companies from the array
console.log(
  itCompanies.slice(
    "Slice out the middle it company",
    Math.floor(itCompanies.length / 2),
    Math.floor(itCompanies.length / 2) + 1
  )
);
//Remove the first IT company from the array
itCompanies.splice(0, 1);
console.log("Removed first it company", itCompanies);
//Remove the middle IT company or companies from the array
itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
console.log("Removed middle company", itCompanies);
//Remove the last IT company from the array
itCompanies.splice(itCompanies.length - 1, 1);
console.log("Removed last it company", itCompanies);
//Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log("Remove all it companies", itCompanies);
