/****** Break Statment  ***********/

// for (let count = 1; count <= 10; count++) {
//   if (count == 5) {
//     break;
//   }
//   document.write(count);
//   document.write("<br>");
// }

/******* Continue ********/
// for (let counter = 1; counter <= 10; counter++) {
//   if (counter == 5) {
//     //misinh 5
//     continue;
//   }
//   document.write(counter);
//   document.write("<br>");
// }

/********* Nested loops *********/

// for (let counter = 1; counter <= 10; counter++) {
//   document.write(counter);
//   document.write("<br>");

//   for (counter2 = 1; counter2 < 3; counter2++) {
//     document.write("Amit");
//     document.write("<br>");
//   }
// }

/***** break continue in nested loops  *******/

outer: for (let counter = 1; counter <= 10; counter++) {
  document.write(counter);
  document.write("<br>");

  for (let counter2 = 1; counter2 < 3; counter2++) {
    if (counter == 4) {
      continue outer; //countinue//break outer
    }
    document.write("amit");
    document.write("<br>");
  }
}
