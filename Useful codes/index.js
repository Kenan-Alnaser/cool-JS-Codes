// how many chr in a str(not case sens)
// howManyStr(“I like pizza”,“p”) -> 1
const howManyStr = (str, char) => {
  return (charExists = str
    .toLowerCase()
    .split("")
    .filter((currentChar) => currentChar == char).length);
};
console.log(howManyStr("I like pizza", "i"));

// letter counter object
let counter = (str) => {
  return str.split("").reduce((count, letter) => {
    count[letter] ? count[letter]++ : (count[letter] = 1);
    return count;
  }, {});
};
console.log(counter("ABC"));

// A function which accepts any amount of numbers and returns the average.
// e.g
// console.log(average(0)) ---> 0
// console.log(average(1, 2)) ---> 1.5
// console.log(average(1, 3, 6, 10)) ---> 5
// console.log(average(12, 14, 16)) ---> 14

const average = (...args) => {
  const reducer = (accum, currentValue) => accum + currentValue;
  let sum = args.reduce(reducer);
  console.log(sum / args.length);
};
average(1, 3, 6, 10);

//Repeat it.
//A program with two variables: “item” and “times”. A program that repeats the “item” as many times as specified by “times”.
//The first variable (“item”) is the item that needs repeating while the second argument (“times”) is the number of times the item is to be repeated.
//x(“example”, 3) ➞ [“example”, “example”, “example”]

const repeatItem = (item, times) => {
  let itemArray = [];
  for (let i = 0; i < times; i++) {
    itemArray.push(item);
  }
  return itemArray;
};

console.log(repeatItem("item", 3));

//The Greater Numbers.
// A function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number.
//The function should return the elements of the array which are greater than the second argument.
//i.e.
//findGreatest([3, 4, 5], 4) ➞ 5
//findGreatest([10, 20, 30], 12) ➞ 20, 30
//findGreatest([0, 10, 3], 4) ➞ 10
const findGreatest = (numArray, num) => {
  let higherNumbers = [];
  for (i = 0; i < numArray.length; i++) {
    numArray[i] > num ? higherNumbers.push(numArray[i]) : {};
  }
  return higherNumbers.join(", ");
};
console.log(findGreatest([1, 3, 5, 9], 4));

//AEIOU:
//Vowels. A function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
//i.e. findVowels(“this is a string”) ➞ 4

const vowelCount = (str) => {
  let vowelList = "aeiou";
  let vCount = 0;
  let newStr = str.toLowerCase();

  for (var i = 0; i < newStr.length; i++) {
    if (vowelList.indexOf(newStr[i]) !== -1) {
      vCount += 1;
    }
  }
  return vCount;
};
console.log(vowelCount("this string has sOme vowEls"));

//Password Generator
function generatePassword(passwordLength) {
  let numberChars = "0123456789";
  let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerChars = "abcdefghijklmnopqrstuvwxyz";
  let specialChars = "!§$%&?_@";
  let allChars = numberChars + upperChars + lowerChars + specialChars;
  let randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = upperChars;
  randPasswordArray[2] = lowerChars;
  randPasswordArray[3] = specialChars;
  randPasswordArray = randPasswordArray.fill(allChars, 3);
  return shuffleArray(
    randPasswordArray.map(function (x) {
      return x[Math.floor(Math.random() * x.length)];
    })
  ).join("");
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(generatePassword(30));

//Add Up.
//A function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
//Examples:
//sumIntFrom1ToN(4) ➞ 10 sumIntFrom1ToN(13) ➞ 91 sumIntFrom1ToN(600) ➞ 180300

const sumIntFrom1ToN = (num) => {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  return result;
};
console.log(sumIntFrom1ToN(600));

// snake_case to camelCase
const snakeToCamelCase = (str) => {
  strToArray = str.split("");
  for (i = 0; i < strToArray.length; i++) {
    if (strToArray[i] == "_") {
      strToArray.splice(i, 1);
      strToArray.splice(i, 1, strToArray[i].toUpperCase());
      snakeStr = strToArray.join("");
    }
  }
  return snakeStr;
};
console.log(snakeToCamelCase("hello_world"));
console.log(snakeToCamelCase("javascript_is_fun"));

// Call me : a function that receive a text from user and check if the user has entered a phone number, and print that out.

// Note : phone number should be within the German network starts with (030 or 017) only and has 7 digits after the prefix number

// Examples :

// phone("Hi, call me on 030221A398 "); -> This is not a valid phone number 030221A398

// phone("Hi my number is 038 "); -> This is not a valid phone number 038
const phone = (str) => {
  let validOrNot = "";
  strSplit = str.split(" ");
  let phoneNum = strSplit.slice(-1)[0];
  let areaCode = phoneNum.slice(0, 3);
  if (phoneNum.match(/[a-z]/i)) {
    validOrNot = `This is not a valid number ${phoneNum}`;
  } else if (areaCode !== "030" && areaCode !== "017") {
    validOrNot = `This is not a valid number ${phoneNum}`;
  } else if (phoneNum.length !== 10) {
    validOrNot = `This is not a valid number ${phoneNum}`;
  } else {
    validOrNot = `This a valid number ${phoneNum}`;
  }
  return validOrNot;
};
console.log(phone("Hi, call me on 030221A398"));

// IsBank : a function that checks whether the user has entered a valid German bank account.

// Note: German bank accounts should starts with DE and has 20 number after that.

// DExxxxxxxxxxxxxxxxxxxx

// Examples :

// bankChecker("Hi, why you need my bank account? "); -> There was no bank account in the text

// bankChecker("I delete, have bank DE"); -> This is not a valid bank account

// bankChecker("DE12100110013000400011")); -> The bank account DE12100110013000400011 is valid
const bankChecker = (str) => {
  let checkBank = "";
  let strSplit = str.split(" ");
  let bankAcc = strSplit.filter((el) => el.indexOf("DE") !== -1);
  let bankAccStr = bankAcc.join("").slice(0, 2);
  let bankNum = bankAcc.join("").substring(2);
  if (bankAccStr !== "DE") {
    checkBank = "There was no bank account in the text";
  } else if (bankNum.match(/[a-z]/i) || bankNum.length !== 20) {
    checkBank = "This is not a valid bank account";
  } else {
    checkBank = `The bank account ${bankAcc} is valid`;
  }
  return checkBank;
};
console.log(bankChecker("I delete, have bank DE12314125123412341234"));

// Validate Email : a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.

// The string must contain an “@” character.

// The string must contain a “.” character.

// The “@” must have at least one character in front of it.

// e.g. “john@example.com” is valid while “@example.com” is invalid.

// The “.” and the “@” must be in the appropriate places.

// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.

// Examples :

// validate("contact@hadi-nsreeny.com") -> This is valid email address, thank you

// validate("@hadi-nsreeny.com") -> Sorry, invalid email address
const validate = (str) => {
  let condition = /\S+@\S+\.\S+/;
  let result = "";
  if (condition.test(str) == true) {
    result = "This is a valid email address, thank you.";
  } else {
    result = "Sorry, invalid email address.";
  }
  return result;
};
console.log(validate("contact@hadi-nsreeny.com"));
