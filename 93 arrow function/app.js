function sum(a, b) {
  return a + b;
}
console.log(sum(5, 7));

//arrow

let sumA = (a, b) => {
  return a + b;
};
console.log(sumA(5, 9));
//-----------------------------------

let sumc = (a, b) => a + b;
console.log(sumc(5, 15));

//-------------------------------------
let double = (a) => 2 * a;
console.log(double(20));

//----------------------------------------
function random() {
  return Math.random;
}
console.log(random());

//arrow
let random1 = () => Math.random();
console.log(random());

//-------------------------------------------
//anonumouse function
document.addEventListener("click", function () {
  console.log("click..");
});

//arrow
document.addEventListener("click", () => {
  console.log("arrow clicked..");
});
//arrow2
document.addEventListener("click", () => console.log("one more click"));
