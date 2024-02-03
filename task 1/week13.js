//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = new Date().getFullYear();
console.log(currentYear);
//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = currentDate.getMonth();
console.log(currentMonth);
//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = currentDate.getDate();
console.log(currentDay);
//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
let birthday = new Date('2024.04.25');
console.log(birthday);
//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
let futureDate = new Date('2025.04.25');
console.log(futureDate);
//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
console.log(`Разница между ${futureDate} и ${currentDate} ${Math.round((futureDate - currentDate) / 24 / 60 / 60 / 1000)} дня`);
//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
let pastDate = new Date('2024.01.20');
console.log(pastDate);
//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
console.log(`Разница составляет: ${Math.round((currentDate - pastDate) / 24 / 60 / 60 / 1000)} дней`)
//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
let nextWeek = new Date('2024.02.05');
console.log(nextWeek);
//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay())
//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
let futureYear = new Date().getFullYear() + 5;
console.log(futureYear);
//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
let futureDateInFutureYear = new Date('2029.04.25');
console.log(futureDateInFutureYear);
//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
console.log(`Разница составляет: ${Math.round(futureYear - currentYear)} лет`)
//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
let date1 = new Date(Date.parse(strDate));
console.log(date1);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
let date3 = Date.parse(strDate);
console.log(date3);
//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date2 = '2023/06/15';
let wrongDate;
if (wrongDate = new Date(Date.parse(date2))){
    console.log('Правильный формат даты')
} else{
    console.log('Неправильный формат даты')
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0){
    console.log(true)
} else{
    console.log(false)
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 == 0){
    console.log(true)
} else{
    console.log(false)
}
//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 == 0){
    console.log(true)
} else {
    console.log(false)
}
//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number >= 1 && number <= 9 || number <= -1 && number >= -9){
    console.log(true)
} else{
    console.log(false)
}
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number >= 10 && number <=99 || number <=-1 && number >=99){
    console.log(true)
} else {
    console.log(false)
}
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number >= 0){
    console.log(true)
} else {
    console.log(false)
}
//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 == 0 || number % 7 == 0){
    console.log(true)
} else {
    console.log(false)
}
//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if(number <= 0) {
    console.log(true)
} else {
    console.log(false)
}
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if(number >= 100 && number <= 999){
    console.log(true)
} else{
    console.log(false)
}
//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
const day = 4;
switch (day) {
    case 1:
        console.log('1-Понедельник');
        break;
    case 2:
        console.log('2-Вторник');
        break;
    case 3:
        console.log('3-Среда');
        break;
    case 4:
        console.log('4-Четверг');
        break;
    case 5:
        console.log('5-Пятница');
        break;
    case 6:
        console.log('6-Суббота');
        break;
    case 7:
        console.log('7-Воскресенье');
        break;
    default:
        console.log('Такого дня недели нет!')
}
//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'S';
let fullName;

switch (direction) {
    case 'N':
        console.log('N - "Север"');
        break;
    case 'W':
        console.log('W - "Запад"');
        break;
    case 'S':
        console.log('S - "Юг"');
        break;
    case 'E':
        console.log('E - "Восток"');
        break;
}
