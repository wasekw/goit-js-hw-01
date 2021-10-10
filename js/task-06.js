let total = 0;
let input;
do {
  input = prompt("Введите любое число", " ");

  total += input;
} while (input === null);
console.log(`Общая сумма введеных вами чисел равна ${total}`);
