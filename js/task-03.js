const answer = prompt("Введите Ваш пароль", " ");
let message;
const ADMIN_PASSWORD = "jqueryismyjam";
if (answer === null) {
  message = "Отменено пользователем!";
} else if (answer === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
