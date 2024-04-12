// 3 Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

const readNumber = () => {
    let number;

    do {
        number = prompt('Введите число', '');
    } while (!isFinite(number))

    if (number === null || number === '') {
        return null;
    }

    return +number
};

// console.log(readNumber());


// 5
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

const random = (min, max) => {
    return Math.random() * (max - min) + min;
}

// console.log( random(1, 5) );

// 6
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
//
//     Любое число из интервала min..max должно появляться с одинаковой вероятностью.


const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log( randomInteger(1, 5) );