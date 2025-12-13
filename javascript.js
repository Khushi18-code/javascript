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

alert("hllo"); // pop out on website
let name = prompt("mine"); // msg ke sath input bhi le sta hai
console.log(name);
let number = prompt("enter a number : ");
if (number % 5 === 0){
    console.log("yes multiple of 5");
}
else {
    console.log("not multiple of 5");
}
if (number <= 100 && number >= 90) {
    console.log("A");
}
else if (number < 90 && number >= 70) {
    console.log("B");
}
else if (number < 70 && number >= 60) {
    console.log("C");
}
else if (number < 60 && number >= 50) {
    console.log("D");
}
else {
    console.log("F");
}
// for loop print even no.
for(let i=1; i<=10; i++) {
    if(i%2===0) {
     console.log(i);
    } 
}
// while loop
let game = 2;
let gameno = prompt("enter the no. =");
while(game != gameno) {
    gameno = prompt("try again");
}
console.log("congrats, you won");
// tempelat literals
let obj = {
    item: "pen" ,
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} ruppes`;
console.log(output);
console.log("the cost of", obj.item, "is", obj.price, "ruppes"); //normal way
//making username
let fullname = prompt("enter your full name");
username = "@"+fullname+fullname.length;
console.log(username);
//print avg
let marks = [44,66,86,90,77];
let sum = 0;
for(let i=0; i<marks.length; i++) {
sum = sum + marks[i];
}
let avg = sum / marks.length ;
console.log(avg);
//10% off 
let price = [250, 645, 300, 900, 50];
for(let i=0; i<price.length; i++) {
   let discount = price[i] /10 ;
    price[i] = price[i] - discount;
}
console.log(price); 
let frnds = ["riya","siya","ram","sohan","mohan"];
frnds.push("naman","raman");
frnds.pop();
console.log(frnds.toString());
let marvel = ["thor", "spiderman", "ironman"];
console.log(frnds.concat(marvel));