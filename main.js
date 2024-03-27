// let hint = prompt("matematik ishorani kiriting 🥸");
// let num1 = +prompt("birinchi sonni kiriting");
// let num2 = +prompt("ikkinchi sonni kiriting");

// function calc(opp, num3, num4) {
//   let calc;
//   switch (opp) {
//     case "+":
//       calc = +num3 + +num4;
//       return calc;
//     case "-":
//       calc = num3 - num4;
//       return calc;
//     case "*":
//       calc = num3 * num4;
//       return calc;
//     case "/":
//       calc = num3 / num4;
//       return calc;
//     default:
//       calc = "hatolik bor tekshiring";
//       return calc;
//   }
// }
// let result = calc(hint, num1, num2);
// alert(result);

// function user(name, age) {
//   let tr;
//   if (age > 18) {
//     tr = true;
//   } else if (age < 18) {
//     tr = false;
//   }
//   let obj = {
//     name,
//     age,
//     gr: tr,
//   };
//   return obj;
// }

// console.log(user("Azizbek", 15));

function login() {
  if (email === "@azizbek" && password === 12345678) {
    alert("Tabriklayman siz ruyhatdan utdingiz");
  } else {
    alert("Iltimos, yana bir bor urinib ko'ring.");
  }
}
let count = 1;
while (count <= 3) {
  let email = prompt("Emailni kiriting:");
  let password = prompt("parolni kiriting:");
  if (email === "@azizbek" && password === "12345678") {
    alert("Tabriklayman siz ruyhatdan utdingiz");
    break;
  } else {
    alert("Iltimos, yana bir bor urinib ko'ring.");
  }
  count++;
}
email;
