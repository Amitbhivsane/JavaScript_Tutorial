let book = ["math", "phy", "eng", "cs", "geo", "history"];
console.log(book[3]);
console.log(book);

// book[1] = "polity";
// console.log(book);

// /*add element at last */
// book.push("Marathi");
// console.log(book);
// /* add element at  first*/
// book.unshift("economics");
// console.log(book);

// /*Deleted from last*/
// book.pop(); //marathi deleted
// console.log(book);

// /*Deleted from first*/
// book.shift();
// console.log(book);

// /*Deleted from position*/
// book.splice(4, 1);
// console.log(book);

// //* Empty array* */ /
// book = []; //empty
// console.log(book);
// book.length = 0; //empty
// console.log(book);

// /*find the position of element*/
// let position = book.indexOf("cs");
// console.log(position);

// /*Check array true false*/
// console.log(Array.isArray(book));

// /* Text into array*/

// let text = "This is a random array in my program";
// let wordarray = text.split(" "); //by charachter e a s....
// console.log(wordarray);

/*Array into  sentents*/
// let text1 = ["math", "phy", "eng", "cs", "geo", "history"];
// console.log(text1);
// let wordarray1 = text1.join("-"); //by symbol ....
// console.log(wordarray1);

// console.log("------------------Joint two or more array---------------");
// let pack = ["math", "phy", "eng", "cs", "geo", "history"];
// let pack1 = ["marathi", "punjabi"];
// let pack3 = ["urdu"];
// let allpack = pack.concat(pack1, pack3);
// console.log(allpack);
// console.log("===================multidimensinal array===============");

// let bookwithpage = [
//   ["math", "500"],
//   ["phy", "400"],
//   ["eng", "640"],
// ];

// let fetch = bookwithpage[1];
// console.log(fetch);
// console.log(bookwithpage[1][1]);
// console.log("--------------for loop using array----------------------");

// let books = ["eng", "math", "geo", "history", "marathi"];
// let booklength = book.length;
// for (i = 0; i < booklength; i++) {
//   console.log(`Element  ${i} is ${book[i]} \n `);
// }

// console.log("--------------foreach loop using array----------------------");

book.forEach(myfun);

function myfun(value) {
  console.log(value);
}

// console.log("------------------------------------");
