'use strict';

let button = document.querySelector('#btn');
let form = document.querySelector('.form')

let image = [
    '../assets/img/icons8-год-кролика-96.png',
    '../assets/img/icons8-еж-80.png',
    '../assets/img/icons8-животное-100.png',
    '../assets/img/icons8-жираф-100.png',
    '../assets/img/icons8-печать-80.png',
    '../assets/img/icons8-собакен-100.png',
    '../assets/img/icons8-тапир-100.png',
]

let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
}

function createElements(){
    let containerChatClone = document.createElement('div');
    containerChatClone.className = 'container-chat1';
    //ввод имени
    let text = document.createElement('p');
    text.className = 'text';
    let input = document.querySelector('.input').value.trim();
    if(input !== '') {
        let textTransform = input[0].toUpperCase() + input.slice(1).toLowerCase();
        input = textTransform;
    }else if(input == ''){
        input = 'Username'
    };
    text.textContent = input;
    //ввод ссылки на картинку
    let img = document.createElement('img');
    img.className = 'img';
    let avatarSrc = document.querySelector('#avatar');
        if(avatarSrc.value !== ''){
            img.src = avatarSrc.value;
        } else if(avatarSrc.value == ''){
            let randomImageIndex = Math.floor(Math.random() * image.length);
            img.src = image[randomImageIndex];
        }
    //замена слова в комментариях
    let comment = document.createElement('p');
    comment.className = 'place__comment';
    let textarea = document.querySelector('#comment');
    let newText = textarea.value.replace(/viagra|XXX/gi, '***');
    comment.textContent = newText
    //вставка даты
    let dateStr = document.createElement('p');
    dateStr.className = 'date-today';
    let dateNow = new Date();
    dateStr.textContent = dateNow.toLocaleString('en',options);
    containerChatClone.appendChild(text);
    containerChatClone.appendChild(img);
    containerChatClone.appendChild(comment);
    containerChatClone.appendChild(dateStr);
    let containerChat = document.querySelector('.container-chat');
    containerChat.appendChild(containerChatClone);
}

button.addEventListener('click', evt => {
    createElements();
    form.reset();
    evt.preventDefault();
});

//выбор значения в чекбоксах
let checkboxNo = document.querySelector('#checkbox-no');
let checkboxYes = document.querySelector('#checkbox-yes');
let wrapperUser = document.querySelector('.wrapper-user');

checkboxNo.addEventListener('change', () =>{
    if(checkboxNo.checked){
        wrapperUser.style.display = 'none';
    } else{wrapperUser.style.display = 'block';}
    }
)

checkboxYes.addEventListener('change', () => {
    if(checkboxYes.checked){
        wrapperUser.style.display = 'block';
    } else{wrapperUser.style.display = 'none'}
    }
)