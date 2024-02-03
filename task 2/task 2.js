'use strict'

const today = new Date();
let btn = document.querySelector('.button');
let result = document.querySelector('.result')
let errorMessage = document.querySelector('.errorMessage');

function clickBtn (){
    let birthday = document.querySelector('input[type="date"]').value;
    birthday = Date.parse(birthday);
    if(!birthday){
        errorMessage.style.display = 'block';
        return;
    } else {
        errorMessage.style.display = 'none';
    };
    if(today > birthday) {
        today.setFullYear(today.getFullYear() + 1);
    }
    let date = Math.ceil((birthday - today) / 24 / 60 / 60 / 1000);
    let daysWord;
    if (date % 10 == 1 && date % 100 != 11) {
        daysWord = 'день';
    } else if (date % 10 >= 2 && date % 10 <= 4 &&(date % 100 < 10 || date % 100 >= 20)) {
        daysWord = 'дня';
    } else {
        daysWord = 'дней';
    }
    result.textContent = `До следующего дня рождения осталось: ${date} ${daysWord}`;
    return 
}

btn.addEventListener('click', clickBtn, )