// Получение кнопок
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const container = document.querySelector('.container');

// Получение кол-ва слайдов
// Подсчет слайдов с помощью div (length - получаем число элементов в списке)
const mainSlider = document.querySelector('.main-slide');
const slidesCount = mainSlider.querySelectorAll('div').length;

// Переменная для слежения за активным слайдом
let activeSlideIndex = 0;

// Совпадение градиента с картинкой
const sidebar = document.querySelector('.sidebar');
// Работаем со стилями
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

// Добавление слушателя к кнопкам
upBtn.addEventListener('click', () => {
    changeSlide('up')
});

downBtn.addEventListener('click', () => {
    changeSlide('down')
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        // Проверка кол-ва слайдов, чтобы не выйти за рамки
        if (activeSlideIndex === slidesCount)
        {
            // Если вышли за рамки, происходит обнуление
            activeSlideIndex = 0;
        };
    } else if (direction === 'down'){
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        };
    };

    const height = container.clientHeight;

    // Анимация
    mainSlider.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};
