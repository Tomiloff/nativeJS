// 2. Следующая функция возвращает true, если параметр age больше 18.
//
// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }

// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
//
//     Сделайте два варианта функции checkAge:
//
//     Используя оператор ?
//     Используя оператор ||


// function checkAge(age) {
//     return age > 18 ? true : confirm('Родители разрешили?');
// }
//
// function checkAge(age) {
//     return age > 18 || confirm('Родители разрешили?');
// }


// 3. Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function min(a, b) {
//     return a < b ? a : b;
// }
//
// console.log(min(2, 2));



// 4. Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

const numberX = +prompt('Введите любое число', '');
const numberN = +prompt('Введите степень', '');

function checkNumberIsInteger(number) {
    return number % 1 === 0;
}

function pow(x, n) {
    if (n >= 1 && checkNumberIsInteger(n)) {
        return x**n;
    } else {
        console.log('Степень не является целым или натуральным числом.')
    }
}

pow(numberX, numberN);








