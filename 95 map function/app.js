//simple function
let array = [2, 3, 4, 5, 6];
let array1 = [];

for (let i = 0; i < array.length; i++) {
  array1[i] = array[i] * 2;
}
console.log(array1);

// second ananoumas

let array3 = [2, 3, 4, 5, 6];

array4 = array3.map(function (val) {
  return val * 3;
});

console.log(array4);
//using array function
let ar = [2, 3, 4, 5];
let ar1 = ar.map((val) => val * 4);
console.log(ar1);
