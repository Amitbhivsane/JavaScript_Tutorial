//compairsion operator and logical operator
//1-equal
let a = 5;
b = 5;
let c = a == b;
console.log(c); //true using two value
p = a === b;
console.log(p); //value and data type same
let m = "5";
console.log(a == m); //true
console.log(a === m); //false
console.log(a === m); //false
let x = 12,
  y = 12;

console.log("------------not eqaul to------------");
//2-not equal to !
let q = 14; //5
let r = 12; //14 false
console.log(r != q); //true

console.log("------------Not equal value not equal type");
let no1 = 5;
let no2 = 5;
let no3 = "5";
let no4 = 12;
console.log(no1 !== 5); //false
console.log(no1 !== no3); //true
console.log(no1 !== no4); //true
console.log("----double and  (both true)------");
let num1 = 12;
num2 = 32;
num3 = 43;
num4 = 12;
console.log(num3 > num2 && num4 < num1); // t t true
console.log(num2 > num3 && num4 < num2); // t f true
console.log("====or condition=======");
console.log(num1 == num2 || num4 == no4); // t t true
console.log(num3 == num2 || num1 == num2); //t f false
console.log(!(num1 = num2)); //false
