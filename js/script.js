/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

let movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};




const reklama = document.querySelectorAll('.promo__adv img')
const promo__genre = document.querySelector('.promo__genre')
const promo__bg = document.querySelector('.promo__bg')
const interactive = document.querySelectorAll('.promo__interactive-item')


// 1
reklama.forEach(reklama_delete => {
    reklama_delete.remove('reklama')

})

// 2
promo__genre.innerHTML = 'Драма'


// 3
promo__bg.style.backgroundImage = 'url(./img/bg.jpg)'

// 4


interactive.forEach((li, idx) => {
    li.innerHTML = movieDB.movies[idx],
    // 5
    li.innerHTML = `${idx + 1}. ${li.innerHTML}`
})



