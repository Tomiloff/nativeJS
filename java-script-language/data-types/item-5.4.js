// 2
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
//     Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//     Удалите первый элемент массива и покажите его.
//     Вставьте Рэп и Регги в начало массива.

const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
// console.log(styles);

const stylesLength = styles.length;
const middlePosition = Math.floor(stylesLength / 2);
styles[middlePosition] = 'Классика';
// console.log(styles);

const firstElement = styles.shift();
// console.log(firstElement);
// console.log(styles);

styles.unshift('Рэп', 'Регги');
//console.log(styles);


// 4

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
//     Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
//     P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

const sumInput = () => {
    const numberList = [];
    let number = 0;

    do {
        number = prompt('Введите число', '');

        if (isFinite(number)) {
            numberList.push(+number);
        }
    } while (number !== null && isFinite(number));

    let sumNumbers = 0;

    for (number of numberList) {
        sumNumbers += number;
    }

    return sumNumbers;
}

// console.log(sumInput());

// 5

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
//
//     Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
//
//     Функция getMaxSubSum(arr) должна возвращать эту сумму.


const getMaxSubSum = (arr) => {
    const filteredNumbers = [];
    const sumNumbers = 0;

    while (arr.length !== 0) {
        const maxNumber = Math.max.apply(null, arr);
        const indexNumber = arr.indexOf(maxNumber);

        filteredNumbers.push(maxNumber);
        arr.splice(indexNumber, 1);
    }

    console.log(filteredNumbers);
}

getMaxSubSum([1, -2, 3, 4, -9, 6]);