"use strict";
// // let arrowDown = document.querySelector(".question__arrow-down");
// // let questionTitle = document.querySelector(".question__title");
// // let questionText = document.querySelector(".question__text_hidden");


let avatar = document.querySelector('.avatar');
let accountTitle = document.querySelector('.account__title');
let wrap = document.querySelector('.account__wrapper-content');


const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleTabletChange(e) {
    if (e.matches) {
    avatar.appendChild(accountTitle);
  }
}

// Слушать события
mediaQuery.addListener(handleTabletChange);

// Начальная проверка
handleTabletChange(mediaQuery);
