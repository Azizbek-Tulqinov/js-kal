let hint = prompt("matematik ishorani kiriting 🥸");
let num1 = +prompt("birinchi sonni kiriting");
let num2 = +prompt("ikkinchi sonni kiriting");

function calc(opp, num3, num4) {
  let calc;
  switch (opp) {
    case "+":
      calc = +num3 + +num4;
      return calc;
    case "-":
      calc = num3 - num4;
      return calc;
    case "*":
      calc = num3 * num4;
      return calc;
    case "/":
      calc = num3 / num4;
      return calc;
    default:
      calc = "hatolik bor tekshiring";
      return calc;
  }
}
let result = calc(hint, num1, num2);
alert(result);
