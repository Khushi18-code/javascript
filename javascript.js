console.log("Welcome to my new learning!!");
console.log("With : khushi jain");
let age = 19;
console.log(age);
let x = null;
let y = undefined;
console.log(x);
console.log(y);
let a = 8;
let b = 2;
console.log("a ** b = ", a ** b);
// ** this is exponential expression that is a to power b*/
a++;
console.log(a, ++a); // a is now 10
// assignment operators
console.log("a += b = ", a += b); // a is 12
console.log("a -= b = ", a -= b);
console.log("a *= b = ", a *= b);
console.log("a /= b = ", a /= b);
console.log("a %= b = ", a %= b);
console.log("a **= b = ", a **= b);
// comparison operators
console.log("a == b = ", a == b);
console.log("a != b = ", a != b);
console.log("a === b = ", a === b); // strict comparison datatype bhi check kr lega
console.log("a !== b = ", a !== b);
console.log(a);
console.log("a <= b = ", a <= b);
console.log("a >= b = ", a >= b);
// logical operator
let cond1 = a > b ;
let cond2 = a != b ;
console.log("cond1 && cond2 =", cond1 && cond2);
console.log("cond1 || cond2 =", cond1 || cond2);
console.log("!cond1 =", !cond1);
// conditional statment
let mode = "light";
let color ;
if (mode === "dark") {
    color = "black";
}
if (mode === "light") {
    color = "white";
}
console.log(color);

if (mode === "dark") {
    color = "black";
}
else {
    color = "white";
}
console.log(color);
let num = 8;
if (num % 2 === 0) {
    console.log(num, "is even no.")
}
else {
    console.log(num, "is odd no.")
}
// ternary operator
age > 18 ? console.log("adult") : console.log("not adult") ;


