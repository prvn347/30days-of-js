//Functions
//task 1 wap to check if a number is even or odd and long the result to the consolse.
function evenorodd(num) {
  if (num % 2 == 0) {
    console.log("num is even");
  } else {
    console.log("num is odd");
  }
}
//task 2 wap calculate  the sqaure of a number
function sqaure(num) {
  let sqaure = num * num;
  return num;
}

//task 3 wap to find the maximum of two number

function MaxNum(num1, num2) {
  if (num1 < num2) {
    console.log("num2 is max");
  } else {
    console.log("num1 is max");
  }
}

//task 4 wap to cancatenate two strings

const concateNate = (str1, str2) => {
  return str1 + str2;
};

//task 5 wap to sum two num using arrow funtion

const ArraoSum = (num1, num2) => {
  return num1 + num2;
};

//task 6 wap to check if strings contain specifc character and return the boolearn value

const BooleanCheack = (str, specificChar) => {
  const arrayOfStr = str.split("");
  arrayOfStr.forEach((element) => {
    if (element === specificChar) {
      return true;
    }
  });
};

//task 7 wap to showcase parameter and default value

const Params = (num1, num2 = 3) => {
  return num1 * num2;
};

//task 8  wap that takes a person's name and age and return greeting message
const greeting = (name, age = 8) => {
  console.log("Hello" + name + "happy" + age + "the birthday");
};

//task 9 wap that takes a function and a num and call the funtion that many
const callback = (func, num) => {
  for (let index = 0; index < num; index++) {
    func;
  }
};

evenorodd(3);
sqaure(20);
MaxNum(3, 4);
concateNate("Pravin", "Sahu");
ArraoSum(3, 5);
BooleanCheack("pravin", "i");
Params(3);
greeting("Pravin");
callback(greeting(), 3);

// task 10 : wap
