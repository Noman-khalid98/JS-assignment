"use strict";
//Q No 1:////////////////////////////////////////
let currentYear = 2024;
let birthYear = 1998;
let age = currentYear - birthYear;
console.log("your age is " + age);
//Q No 2:////////////////////////////////////////
let Length = 10;
let Width = 20;
let area = Length * Width;
console.log("area of Rectangle is" + " " + area);
//Q No 3:////////////////////////////////////////
let pi = 3.14159265358979323846;
let r = 5;
let Area = pi * r * r;
console.log("area of circle" + " " + Area);
//Q No 4:////////////////////////////////////////
var x = 6;
var cube = x * x * x;
console.log("area of cube" + " " + cube);
//Q No 5:////////////////////////////////////////
var celcius = 20;
var Farenhit = (celcius * 9 / 5) + 32;
console.log("temprature in Farenhit" + " " + Farenhit);
//Q No 6:////////////////////////////////////////
let totalsec = 168;
let minutes = Math.floor(totalsec / 60);
let seconds = totalsec % 60;
console.log(`${totalsec} seconds equal to ${minutes} minutes and ${seconds} seconds`);
//Q No 7:////////////////////////////////////////
let totalMarks = 500;
let obtainMarks = 300;
let percentage = obtainMarks / totalMarks * 100;
console.log(`percentage is ${percentage}%`);
///Increment and Decrement Operator
//Q No1:////////////////////////////////////////
let a = 2;
let b = ++a * 2;
console.log(b);
//Q No2:////////////////////////////////////////
let z = 5;
let y = z-- + 2;
console.log(y);
//Q No3:////////////////////////////////////////
let f = 3;
let g = ++f + f++ + ++f;
console.log(g);
//Q No4:////////////////////////////////////////
let m = 2;
let n = ++m * m++ * --m;
console.log(n);
//Q No5:////////////////////////////////////////
let i = 3;
let j = 5;
let result = ++i + j-- - i++ + --j;
console.log(result);
//Q No6:////////////////////////////////////////
let u = 2;
let v = 4;
let p = u++ + ++v - --u + v--;
console.log(u, v, p);
//Q No7:////////////////////////////////////////
let A = 5;
let B = 3;
let C = 2;
let D = 7;
let Result = ++A * (B-- + C) / --D;
console.log(Result);
//Q No7:////////////////////////////////////////
let M = 2;
let N = 3;
let O = 4;
let RESULT = M++ * (--N + M) / (O-- - N);
console.log(RESULT);
