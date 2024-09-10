
// 1
var label = "keyincollege";
var tld = "ca";
var domainName = label + "." + tld;
console.log(domainName);

// 2
let isKeyin;
if (domainName === "keyincollege.ca") {
    isKeyin = true;
}
else {
    isKeyin = false;
}
console.log(isKeyin);

// 3
let isNotKeyin;
if (isKeyin = true) {
    isNotKeyin = false;
} else if (isKeyin = false) {
    isNotKeyin = true;
}
console.log(isNotKeyin);

// 4
let byte1 = "123"
let byte2 = "222"
let byte3 = "76"
let byte4 = "7"

// 5
var ipAress = byte1 + "." + byte2 + "." + byte3 + "." + byte4
console.log(ipAress);

// 6
var number = 2
// var table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// table.forEach(element => {
//     console.log(element * number);
// });
for (let i = 0; i <= 10; i++) {
    console.log(number, "X", i, "=", (i * number));
}

// 7
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i, "is odd");
    }
    else {
        console.log(i, "is even");
    }
}

// 8
var evenSum = 0;
var oddSum = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        oddSum += i;
    }
    else {
        evenSum += i;
    }
}
console.log("Sum of odd numbers:", oddSum);
console.log("Sum of even numbers:", evenSum);

// 9
let num = 28;
let sum = 0;
for (let i = 0; i < num; i++) {
    if (num%i === 0)
    {
        sum += i;
    }
}

console.log("Sum of divisors:", sum);

if (sum === num) {
    console.log(num, "is a perfect number");
}

if (sum !== num) {
    console.log(num, "is not a perfect number");
}

// 10
let num1 = 61

if (num1 > 1) {
for (let i = 2; i <= (num1/2); i++) {
    if (num1%i === 0) 
    {
        console.log(num1, "in not a prime number");
        break;
    }
    else {
        console.log(num1, "is a prime number");
        break;
    }
}
}