/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
/*console.log("----Ex1----");

function area(l1, l2) {
  areaOfRect = l1 * l2;
  console.log(areaOfRect);
}

area(4, 6);
*/
/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
/*
console.log("----Ex2----");
function crazySum(int1, int2) {
  other = int1 === int2 ? (int1 + int2) * 3 : int1 + int2;
  console.log(other);
}

crazySum(2, 3);
*/
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
/*
console.log("----EX3----");
function crazyDiff(number) {
  difference = number > 19 ? Math.abs(19 - number) * 3 : Math.abs(19 - number);
  console.log(difference);
}

crazyDiff(20);
*/

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/*
console.log("----EX4----");
function boundary(n) {
  number = n >= 20 && n <= 100 ? true : 400;
  console.log(number);
}

boundary(1);
*/

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
/*
console.log("----EX5----");

function strivify(str) {
  word = "Strive ";
  if (str.startsWith(word)) {
    console.log(str);
  } else {
    console.log(word + str);
  }
}

strivify("we must, succeed we will.");
*/

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
/*
console.log("----EX6----");

function check3and7(posNum) {
  if (posNum < 0) {
    console.log("first test failed");
  } else if (posNum > 0) {
    console.log("first test passed");
    if (posNum % 3 === 0) {
      console.log("this number is a multiple of 3");
    } else if (posNum % 7 === 0) {
      console.log("this number is a multiple of 7");
    }
  } else {
    console.log("tests failed: test has ended");
    return;
  }
}

check3and7(70);
*/

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/*function reverseString(str) {
  splitStr = str.split("");
  reverse = splitStr.reverse();
  whole = reverse.join("");
  console.log(whole);
}

reverseString("I'm having sooo much fun!!!");
*/

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(sentence) {
  words = sentence.split();
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    whole = words.join("");
    console.log(whole);
  }
}

upperFirst("here i am");

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/*function cutString(str) {
  splitstr = str.split();
}*/

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/*function giveMeRandom() {}*/

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
