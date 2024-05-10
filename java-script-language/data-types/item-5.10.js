// 1Деструктурирующее присваивание

let user = {
    name: "John",
    years: 30
};

const {name, years: age, isAdmin = false} = user;

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false

// 2 Максимальная зарплата

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalary = (salaries) => {
    // const topSalary = Math.max(...Object.values(salaries));
    // const workerTopSalary = Object.entries(salaries).find(([, value]) => value === topSalary);
    //
    // return Object.keys(salaries).length ? workerTopSalary[0] : null;

    let maxSalary = 0;
    let maxName = null;

    for (const [key, value] of Object.entries(salaries)) {
        if (value > maxSalary) {
            maxSalary = value;
            maxName = key;
        }
    }

    return maxName;
};

console.log(topSalary(salaries))
