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

console.log(camelize('list-style-image'))