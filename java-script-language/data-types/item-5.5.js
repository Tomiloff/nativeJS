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

