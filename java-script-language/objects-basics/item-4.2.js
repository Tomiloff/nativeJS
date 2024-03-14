// Скопировать объект

const object1 = {
    name: "Maxim",
    age: 29,
    geoposition: {
        city: "Ekaterinburg",
        district: "VIZ",
    },
}

const cloneDeep = (object) => {
    const object2 = {};

    for (let key in object) {
        object2[key] = typeof object[key] === 'object' ? cloneDeep(object[key]) : object2[key] = object[key];
    }

    return object2;
};

const newObject = cloneDeep(object1);

newObject.geoposition.city = 'Samara';

console.log('newObject', newObject);

console.log('object1', object1)

