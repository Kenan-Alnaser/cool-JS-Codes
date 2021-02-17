//Dictionary.
// A function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
//Examples:
//dictionary(“bu”, [“button”, “breakfast”, “border”]) ➞ [“button”]
//dictionary(“tri”, [“triplet”, “tries”, “trip”, “piano”, “tree”]) ➞ [“triplet”, “tries”, trip”]
//dictionary(“beau”, [“pastry”, “delicious”, “name”, “boring”]) ➞ []

const dictionary = (str, strArray) => {
  let result = [];
  let userInput = str.toLowerCase();
  for (let i = 0; i < strArray.length; i++) {
    let currentValue = strArray[i].toLowerCase();
    if (currentValue.includes(userInput)) {
      result.push(currentValue);
    }
  }
  return result;
};

console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));

//isPalindrome.
//A program to check whether a word is a palindrome or not.
//Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

const palindrome = (str) => {
  let lowerStr = str.toLowerCase();
  let reverseStr = lowerStr.split("").reverse().join("");
  return reverseStr == lowerStr;
};

console.log(palindrome("madam"));

// Basic Pig Latin translator
const pigLatin = (str) => {
  const lowerCase = str.toLowerCase();
  const splitStr = lowerCase.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];
  const pigTranslation = [];
  let lastCharArr = splitStr
    .slice(splitStr.length - 1)
    .join("")
    .split("");
  let lastChar = lastCharArr[lastCharArr.length - 1];
  console.log(lastChar);
  if (lastChar == ".") {
    lastCharArr.pop();
    noDot = lastCharArr.join("").split(" ");
    splitStr.splice(-1, 1);
    splitStr.push(noDot);
    console.log(splitStr);
  }
  for (let i = 0; i < splitStr.length; i++) {
    let firstChar = splitStr[i][0];
    let remainder = splitStr[i].slice(1, splitStr[i].length);
    if (vowels.includes(firstChar)) {
      let firstCharVowel =
        (i ? firstChar : firstChar.toUpperCase()) + remainder + "way";
      pigTranslation.push(firstCharVowel);
    } else {
      if (i === 0) {
        let firstCharRem = remainder[0];
        let wordRemainder = remainder.slice(1, remainder.length);
        remainder = firstCharRem.toUpperCase() + wordRemainder;
      }
      let firstCharConsonant = remainder + firstChar + "ay";
      pigTranslation.push(firstCharConsonant);
    }
  }
  return pigTranslation.join(" ");
};
console.log(pigLatin("Cats are great pets."));

// Tell me my age : a function that calculates the user age e.g. 2000 -> 20.

// Examples :

// age(1940) -> 81

// age(2022)) -> Please enter a valid year

const ageCalc = (dob) => {
  let result = "";
  dobUserInput = new Date(dob);
  let month_diff = Date.now() - dobUserInput.getTime();
  let age_dt = new Date(month_diff);
  let year = age_dt.getUTCFullYear();
  let age = Math.abs(year - dob);
  result = `Age of user: ${age} years`;
  if (isNaN(dob)) {
    return "This isn't a year.";
  }
  if (dobUserInput > year) {
    result = "Please enter a valid year";
  }
  return result;
};
console.log(ageCalc(1940));

// Seasons : a function that accepts a text from user and check if the user has entered a month name
// if so print out that month and in which season it is.

// Examples :

// monthCheck("I love Jun"); -> Jun is in Summer

// monthCheck("We need Kartoffel"); -> I couldn’t find any month in your text, sorry try again

const months = [
  "december",
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
];
const seasons = ["Winter", "Spring", "Summer", "Autumn"];
const monthCheck = (str) => {
  let result = "";
  let userMonth = "";
  let userInput = str.toLowerCase().split(" ");
  for (i = 0; i < userInput.length; i++) {
    if (months.includes(userInput[i])) {
      userMonth = userInput[i];
      const indexOfMonth = (monthName) => {
        return seasons[Math.floor(months.indexOf(monthName)) / 3];
      };
      result = `You have entered ${userMonth}, which is in ${indexOfMonth(
        userMonth
      )} `;
    } else {
      result = "I couldn’t find any month in your text, sorry try again";
    }
  }
  return result;
};
console.log(monthCheck("I love june"));

// > Scrabble. A program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
//  Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
let scrabbleTiles = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
const scrabbleScore = (objArr) => {
  let total = 0;
  for (let prop in objArr) {
    total += objArr[prop].score;
  }
  return total;
};
console.log(scrabbleScore(scrabbleTiles));

// Zodiac sign, A function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// for farther information check https://en.wikipedia.org/wiki/Zodiac
// Examples:
// zodiac(“14-02-2002”)  -> Aquarius
// zodiac(“10-06-1984")  -> Gemini
const getZodiac2 = (date) => {
  let dateArr = date.split("-");
  let day = dateArr[0];
  let month = dateArr[1];
  let bound = [20, 19, 20, 20, 20, 21, 22, 22, 21, 22, 21, 21]; //to divide each month by Zodiac standards
  let startMonth = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
  ];
  monthIndex = month - 1; //so we can use zero indexed arrays
  if (day <= bound[monthIndex]) {
    signMonthIndex = monthIndex;
  } else {
    signMonthIndex = (monthIndex + 1) % 12; //mod 12 to loop around to January index.
  }
  return startMonth[signMonthIndex];
};
console.log(getZodiac2("14-02-2002"));

// Leet Speak translator (simple)
const hackSpeak = (
  original,
  replacements = { a: "4", e: "3", i: "1", o: "0", s: "5" }
) => {
  let userInput = original.toLowerCase();
  let leetSpeek = Object.entries(replacements).reduce(
    (acc, el) => acc.replace(el[0], el[1]),
    userInput
  );
  return leetSpeek;
};
console.log(hackSpeak("I like javaScript"));
