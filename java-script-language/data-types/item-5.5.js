// 1

const camelize = (string) => {
    const stringWithSplit = string.split('');

    const hyphenIndex = stringWithSplit.indexOf('-');
    const validLetterIndex = hyphenIndex + 1;
    const validLetter = stringWithSplit.find((letter) => letter ===stringWithSplit.at(validLetterIndex));
    const changedLetter = validLetter.toUpperCase();

    stringWithSplit.splice(validLetterIndex, 1, changedLetter);
    stringWithSplit.splice(hyphenIndex, 1);

    return stringWithSplit.join('');
}

console.log(camelize('background-color'))