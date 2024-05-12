// 1 Создайте дату
// const date = new Date(2012, 1, 20, 3, 12);
// console.log(date)

// 2 Покажите день недели

// let date = new Date(2012, 0, 3);
// const weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//
// const getWeekDay = (date) => {
//     return weekDays.at(date.getDay());
// }

// console.log( getWeekDay(date) );


// 3 День недели в европейской нумерации

// const getLocalDay = (date) => {
//     return date.getDay() === 0 ? 7 : date.getDay();
// }
//
// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// console.log( getLocalDay(date) );

// 4 Какой день месяца был много дней назад?

// let date = new Date(2015, 0, 2);
//
// const getDateAgo = (date, days) => {
//     const dateAgo = new Date(date);
//
//     dateAgo.setDate(dateAgo.getDate() - days);
//
//     return dateAgo.getDate();
// }
//
// console.log( getDateAgo(date, 1) );
// console.log( getDateAgo(date, 2) );
// console.log( getDateAgo(date, 365) );

// 5 Последнее число месяца?

// const getLastDayOfMonth = (year, month) => {
//     const date = new Date(year, month + 1, 0); // 2 Jan 2016
//
//     // date.setDate(0);
//     return date.getDate();
// }
//
// console.log(getLastDayOfMonth(2012, 1));

// 6 Сколько сегодня прошло секунд?

// const getSecondsToday = () => {
//     const currentDay = new Date();
//     const startCurrentDay = currentDay.setHours(0, 0, 0, 0);
//
//     const currentMlSeconds = Date.now();
//     // const currentSeconds = currentDate.getSeconds();
//     console.log((currentMlSeconds - startCurrentDay) / 1000);
//
//     let now = new Date();
//
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//
//     let diff = now - today;
//     console.log(Math.round(diff / 1000));
// };
//
// getSecondsToday()
