function multable(num) {
  for (i = 1; i <= 10; i++) {
    document.write(`${num}*${i}=${num * i}`);
    document.write("<br>");
  }
  document.write("<br>");
}

document.write("Hello <br>");

multable(5);
document.write("Hello <br>");
multable(12);

document.write("++++++++++++++++++++++++++++<br>");

function add(num1, num2) {
  document.write(num1 + num2);
}

add(5, 6);
