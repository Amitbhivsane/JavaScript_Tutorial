let person = {
  firstname: "amit",
  lastname: "bhivsane",
};
console.log(person.firstname);
console.log(person["lastname"]);
person.age = 25;
delete person.lastname;
console.log(person);

console.log("height" in person); //false

for (let key in person) {
  console.log(key + ":" + person[key]);
}

console.log("---------Methods in object--------------");
