// $(function () {});

const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.menu__items')

burger.addEventListener('click', () => {
    menu.classList.toggle('menu__items--active')
})