// 1 Хранение отметок "не прочитано"

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

const readMessages = new WeakSet();

const checkMessages = (messages) => {
    messages.forEach((message) => readMessages.add(message));
}

checkMessages(messages);

// console.log(readMessages)

// 2 Хранение времени прочтения

const readMessagesByDate = new WeakMap();

const checkMessagesBuDate = (messages) => {
    messages.forEach((message) => readMessagesByDate.set(message, new Date()));
}

checkMessagesBuDate(messages);

console.log(readMessagesByDate)

