// Day 3 Conntrol structures

//if-else statements
//task-1 wap program if a number is positive , negetive or zero.
const readline = require("readline");
let a = 1;
if (a < 0 || a > 0 || a == 0) {
  console.log("a is positive or nagative or zero");
}
//wap to check if a person i elegible to vote or not

// let inputUser = prompt("Enter you age");
// co1

//wap largest of three number

var b = 3;
var c = 4;

if (a > b && a >> c) {
  console.log(" a is the largest among all");
} else if (b > a && b > c) {
  console.log(" b is the largest among all");
} else {
  console.log("c is the largest one");
}

//wap switch case
const inputUser2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
inputUser2.question("enter a number between 1 - 7", (ans) => {
  const num = parseInt(ans, 10);
  switch (num) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Please enter a number between 1 and 7.");
      break;
  }

  inputUser2.close();
});
