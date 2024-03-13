// 2
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// const schedule = {};
//
const isEmpty = (object) => {
    for (let key in object) {
      return false;
    }

    return true;
};
//
// console.log(isEmpty(schedule))


// 4
// У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//
// Если объект salaries пуст, то результат должен быть 0.

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum)