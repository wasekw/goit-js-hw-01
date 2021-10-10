let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const answer = prompt("Сколько дроидов Вы хотите купить?", " ");
// console.log(answer);
if (answer === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = answer * pricePerDroid;

  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    console.log(
      `Вы купили ${answer} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`
    );
  }
}
