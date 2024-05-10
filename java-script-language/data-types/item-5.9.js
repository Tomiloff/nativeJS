// 1 Сумма свойств объекта

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (salaries) => {
    let sum = 0;

    // return Object.values(salaries).reduce((sum, value) => sum + value, 0)

    for (const value of Object.values(salaries)) {
        sum += value;
    }

    return sum;
};

// console.log( sumSalaries(salaries) );

// 2 Подсчёт количества свойств объекта

let user = {
    name: 'John',
    age: 30
};

const count = (obj) => {
    return Object.keys(obj).length;
};

alert( count(user) ); // 2
