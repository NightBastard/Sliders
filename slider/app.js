// Получение кнопок
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

// Получение кол-ва слайдов
// Подсчет слайдов с помощью div (length - получаем число элементов в списке)
const mainSlider = document.querySelector('.main-slide');
const slidesCount = document.querySelectorAll('div').length;

// Совпадение градиента с картинкой
const sidebar = document.querySelector('.sidebar');
// Работаем со стилями
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;