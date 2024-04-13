// 1

const camelize = (string) => {
    const words = string.split('-');
    const result = words.map((word, index) => {
        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    });

    // words.forEach((letter, index, array) => {
    //     if (letter === '-') {
    //         array.splice(index, 1);
    //
    //         const temporaryLetter = array.at(index);
    //         array.splice(index, 1, temporaryLetter.toUpperCase());
    //     }
    // });

    // for (let i = 0; i < convertedString.length; i++) {
    //     if (convertedString.at(i) === '-') {
    //         convertedString.splice(i, 1);
    //
    //         const temporaryLetter = convertedString.at(i);
    //         convertedString.splice(i, 1, temporaryLetter.toUpperCase());
    //     }
    // }

    return result.join('');
}

// console.log(camelize('list-style-image'))

// 2
const arr = [5, 3, 8, 1];

const filterRange = (array, a, b) => {
    if (a && b) {
        return array.filter((element) => element >= a && element <= b);
    }

    return array;
}

const filtered = filterRange(arr, 1, 4);

// console.log(filtered)

// 3 Фильтрация по диапазону "на месте"

const testArray = [5, 3, 8, 1];

const filterRangeInPlace = (array, a, b) => {
    array.forEach((number, index) => {
        if (number <= a || number >= b) {
            array.splice(index, 1);
        }
    })
}

filterRangeInPlace(testArray, 1, 4);

// console.log(testArray)


// 4 Сортировать в порядке по убыванию
// arr.sort(functionCompare);
// От переданной функции сравнения(functionCompare) требуется любое положительное число,
// чтобы сказать «больше», и отрицательное число, чтобы сказать «меньше».
const  arrayNumbers = [5, 2, 1, -10, 8];

arrayNumbers.sort((a, b) => a - b);

// console.log(arrayNumbers)


// 5 Скопировать и отсортировать массив

let arrayLanguages = ["HTML", "JavaScript", "CSS"];

const copySorted = (array) => {
    const newArray = [...array];

    return newArray.sort();
}


// 6
// Создать расширяемый калькулятор
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.


// function Calculator() {
//     this.calculate = function(string, customFunction = null) {
//         this.expressionElements = string.split(' ');
//         this.firstOperand = +this.expressionElements.at(0);
//         this.secondOperand = +this.expressionElements.at(2);
//
//         if (this.expressionElements.at(1) === '+') {
//             return this.sum(this.firstOperand, this.secondOperand);
//         }
//
//         if (this.expressionElements.at(1) === '-') {
//             return this.difference(this.firstOperand, this.secondOperand);
//         }
//
//         if (this.expressionElements.at(1) === '*') {
//             return this['mull'](this.firstOperand, this.secondOperand);
//         }
//
//         if (this.expressionElements.at(1) === '/') {
//             return this['division'](this.firstOperand, this.secondOperand);
//         }
//
//         if (this.expressionElements.at(1) === '**') {
//             return this['exponentiation'](this.firstOperand, this.secondOperand);
//         }
//     }
//
//     this.sum = (a, b) => a + b;
//
//     this.difference = (a, b) => a - b;
//
//     this.addMethod = function(name, optionalFunction) {
//         if (name === '*') {
//             this.mull = optionalFunction;
//         }
//
//         if (name === '/') {
//             this.division = optionalFunction;
//         }
//
//         if (name === '**') {
//             this.exponentiation = optionalFunction;
//         }
//
//     }
//}

function Calculator() {
    this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b
    }

    this.calculate = function(string) {
        const expressionElements = string.split(' ');
        const firstOperand = expressionElements[0];
        const secondOperand = expressionElements[2];
        const operator = expressionElements[1];

        if (!this.methods[operator] || isNaN(firstOperand) || isNaN(secondOperand)) {
            return NaN;
        }

        return this.methods[operator](firstOperand, secondOperand);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}

const calc = new Calculator();

// console.log(calc.calculate('3 + 7'))

calc.addMethod('**', (a, b) => a ** b);

const result = calc.calculate("2 ** 3");

console.log(result)









