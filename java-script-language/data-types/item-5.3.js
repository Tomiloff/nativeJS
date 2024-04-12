// Теговые шаблоны

/**
 Позволяют разбирать шаблонные литералы с помощью функции.
 Первый аргумент такой функции содержит массив строковых значений, а остальные
 содержат выражения из подстановок. В итоге, функция должна вернуть собранную
 строку (или что-либо совсем иное, как будет показано далее).
 Имя функции может быть любым.
 */

// Example
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Template_literals

var person = "Mike";
var age = 28;

function myTag(strings, personExp, ageExp) {
    var str0 = strings[0]; // "That "
    var str1 = strings[1]; // " is a "

    // Технически, в конце итогового выражения
    // (в нашем примере) есть ещё одна строка,
    // но она пустая (""), так что пропустим её.
    // var str2 = strings[2];

    var ageStr;
    if (ageExp > 99) {
        ageStr = "centenarian";
    } else {
        ageStr = "youngster";
    }

    // Мы даже можем вернуть строку, построенную другим шаблонным литералом
    return `${str0}${personExp}${str1}${ageStr}`;
}

var output = myTag`That ${person} is a ${age}`;

// console.log(output);
// That Mike is a youngster



//1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";

const useFirst1 = (string) => {
    const newWtring = string.charAt(0).toUpperCase() + string.slice(1);

    return newWtring;
}

const useFirst2 = (string) => {
    if (!string) {
        return 'Пустая строка'
    }

    const newWtring = string[0].toUpperCase() + string.slice(1);

    return newWtring;
}

//console.log(useFirst2("вася"));

//2
// Напишите функцию checkSpam(str),
// возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

const checkSpam = (string) => {
    const convertedString = string.toLowerCase();
    const spam1 = 'viagra';
    const spam2 = 'xxx';

    return convertedString.includes(spam1) || convertedString.includes(spam2);
}

// console.log(checkSpam('buy ViAgRAa now'));

// 3
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//
//     Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

const truncate = (str, maxlength) => {
    const lengthStr = str.length;
    const startPosition = 0;
    const endPosition = --maxlength;

    if (lengthStr > maxlength) {
        return `${str.slice(startPosition, endPosition)}...`;
    }

    return str;
};

//console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20))


// 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//
//     Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.


const extractCurrencyValue = (str) => {
    return +str.slice(1);
}

console.log(extractCurrencyValue("$120"));