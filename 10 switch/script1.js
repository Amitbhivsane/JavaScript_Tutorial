//

let input;
input = "1";
switch (input) {
  case "1":
  case "y":
  case "yes":
    document.write("continue..");
    break;
  case "no":
  case "0":
  case "n":
    document.write("end..");
    break;
  default:
    document.write("wrong input");
}
