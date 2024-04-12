// 1 Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }
//
// let a = new A();
// let b = new B();
//
// alert( a == b ); // true

let obj = {};

function A() { return obj; }
function B() { return obj; }

// console.log( new A() == new B() ); true


// 2
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
//
//     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

function Calculator() {
    this.read = function () {
        const x = +prompt('Введите любое число', '');
        const y = +prompt('Введите любое число', '');

        this.numberX = x;
        this.numberY = y;
    };

    this.sum = function () {
        return this.numberX + this.numberY;
    };

    this.mul = function () {
        return this.numberX * this.numberY;
    };
}




// let calculator = new Calculator();
// calculator.read();

// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );



// 3
// Создайте функцию-конструктор Accumulator(startingValue).
//
//     Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

function Accumulator(startingValue) {
    this.initialValue = startingValue;

    this.sum = function (value) {
        this.initialValue += value;

        return this;
    };

    this.read = function () {
        const newValue = +prompt('Введите любое число', '');

        this.sum(newValue);

        return this;
    };

    this.showCurrentValue = function() {
        return this.initialValue;
    };
}


let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read().read();

alert(accumulator.showCurrentValue());