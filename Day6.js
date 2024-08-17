//Day 6 Arrays
//activity 1 array creation and access
//task 1 arr of num
let arr = [];
for (let i = 1; i <= 5; i++) {
  arr.push(i);
}
console.log(arr.join(""));

//task 2
console.log(arr[arr.length - 1] + " and " + arr[0]);

//task 3
//task 4 use of pop
arr.pop();
console.log(arr.join(""));

//task 5
arr.shift();
console.log(arr.join(""));

//task 6
arr.unshift(345);
console.log(arr.join(""));

//task 7
const arr1 = arr.map((num) => {
  return (num *= 2);
});
console.log(arr1.join(""));

//task8 filter
const evenArr = arr.filter((num) => num % 2 == 0);
console.log(evenArr.join(""));

//task9 reduce method

const sumArr = arr.reduce((accumaltor, currValue) => {
  return accumaltor + currValue;
}, 0);
console.log("sum is " + sumArr);

//task 10
//task 11

arr.forEach((element) => {
  console.log(element);
});

//task 12
let mtrix = [];
for (let i = 0; i < 5; i++) {
  mtrix[i] = [];
  for (let j = 0; j < 5; j++) {
    mtrix[i][j] = j;
  }
}
console.log(mtrix);

//task 13
