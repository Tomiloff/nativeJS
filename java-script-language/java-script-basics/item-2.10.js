/** 2. Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» */

/* const nameLanguage = prompt('Какое «официальное» название JavaScript?', '');

if (nameLanguage === 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}; */


/** 3. Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert: */

const number = Number(prompt('Введите число', ''));

if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}


/** 4. Перепишите конструкцию if с использованием условного оператора '?': */

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

let result = (a + b < 4) ? 'Мало' : 'Много';


/** Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости рекомендуется разбить код на несколько строк.

 */

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

let message;

(login == 'Сотрудник') ? message = 'Привет' : 
(login == 'Директор') ? message = 'Здравствуйте':
(login == '') ? message = 'Нет логина' : message = '';
