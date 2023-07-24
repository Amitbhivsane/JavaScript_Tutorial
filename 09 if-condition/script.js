// let age = 16;
// let hasvotercard = "no";

// if (age >= 14 && hasvotercard == "yes") {
//   alert("you can vote");
// } else if (age >= 14 && hasvotercard != "yes") {
//   alert("get your voter id card");
// } else {
//   alert("you can not vote");
// }

//example 2
//if input =1,'y',"yes" output continue
//if ipnut =0,'n',"no" output end

// let input;
// input = "15";
// if (input === "1") {
//   document.write("continue");
// } else if (input === "y") {
//   document.write("continue");
// } else if (input === "yes") {
//   document.write("continue");
// } else if (input === "0") {
//   document.write("end");
// } else if (input === "n") {
//   document.write("end");
// } else if (input === "no") {
//   document.write("end");
// } else {
//   document.write("wrong input");
// }

let input;
input = "1";
if (input === "1" || input === "y" || input === "yes") {
  document.write("continue");
} else if (input === "0" || input === "n" || input === "no") {
  document.write("end");
} else {
  document.write("wrong input");
}
