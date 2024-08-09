//day 4 loops

//task 1 loop over 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//task 2 print multiplication table fo 5
for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}

//task 3 wap to calculate sum of 1 to 10
let count = 0;
for (let i = 1; i <= 10; i++) {
  count += i;
}
console.log(count);

//task 4
let x = 10;
while (x >= 1) {
  console.log(x);
  x--;
}

// task 5
let y = 1;
do {
  console.log(y);
  y++;
} while (y <= 5);

//task 6 wap to calc factorial of number

let i = 5;
let fac = 1;
do {
  fac *= i;
  i--;
} while (i >= 1);
console.log(fac);

//task 7 print the pattern

for (let row = 0; row < 5; row++) {
  let pattern = "";
  for (let col = 0; col <= row; col++) {
    pattern += "*  ";
  }
  console.log(pattern);
}

//task 8 wap print num from 1 to 10 tbyut skip num 5 use continue
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
//task 9 wap to print number from 1  to 10 but stop th eloopo when the number is 7 using th break statement
for (let i = 0; i < 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
