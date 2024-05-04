// 1 Фильтрация уникальных элементов массива

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    // const uniqueValues = [];
    // const set = new Set(arr);

    // for (const value of set) {
    //     uniqueValues.push(value);
    // }

    // set.forEach((value) => uniqueValues.push(value));

    // return uniqueValues;

    return Array.from(new Set(arr));
}


// console.log( unique(values) );


// 2 Отфильтруйте анаграммы

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (array) => {
    // const acleanList = [];
    //
    // const anagramDictionary = array.reduce((object, value) => {
    //     object[value] = value.toLowerCase().split('').sort().join('');
    //
    //     return object;
    // }, {});
    //
    // const normalizedAnagrams = array.map((value) => {
    //     return value.toLowerCase().split('').sort().join('');
    // });
    //
    // const withoutAnagramsList = Array.from(new Set(normalizedAnagrams));
    //
    // const anagramDictionaryKeys = Object.keys(anagramDictionary);
    //
    // for (const value of withoutAnagramsList) {
    //     anagramDictionaryKeys.some((key) => anagramDictionary[key] === value ? acleanList.push(key) : null);
    // }
    //
    // return acleanList;

    const map = new Map();

    for (const anagram of array) {
        const normalizedAnagram = anagram.toLowerCase().split('').sort().join('');

        map.set(normalizedAnagram, anagram);
    }

    return Array.from(map.values());
}

// console.log( aclean(arr) );

// 3 Перебираемые ключи

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys)
