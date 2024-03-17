// 2
// Создайте объект calculator (калькулятор) с тремя методами:
//
//     read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
    read() {
        const x = +prompt('Введите любое число', '');
        const y = +prompt('Введите любое число', '');

        this.numberX = x;
        this.numberY = y;
    },

    sum() {
        return this.numberX + this.numberY;
    },

    mul() {
        return this.numberX * this.numberY;
    }
};

// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );


// 3
let ladder = {
    step: 0,
    up() {
        this.step++;

        return this;
    },
    down() {
        this.step--;

        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );

        return this;
    }
};

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().down().showStep().down().showStep(); показывает 1 затем 0


ladder.up().up().down().showStep().down().showStep();