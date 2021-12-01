/* включение и отключение BARS */
(function () {
    const burger = document.querySelector('.burger');
    const navBurger = document.querySelector('.nav-wrapper');
    const clickToA = document.querySelector('.nav-wrapper');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active')
        navBurger.classList.toggle('nav-wrapper_active')
    });

    // Deletion menu after click
    clickToA.addEventListener('click', () => {
        burger.classList.toggle('burger_active')
        navBurger.classList.toggle('nav-wrapper_active')
    });


}());
