// BURGER
const burgerBtn = document.querySelector('.nav-btn-burger');
const burgerCloseBtn = document.querySelector('.nav-btn-close');
const burgerNavigation = document.querySelector('.nav');
const navItems = burgerNavigation.querySelectorAll('a');

//open navigation
burgerBtn.addEventListener('click', () => {
    burgerNavigation.classList.add('nav_active');
    burgerBtn.classList.remove('nav-btn-burger_active');
    burgerCloseBtn.classList.add('nav-btn-close_active');
});

//close navigation btn
burgerCloseBtn.addEventListener('click', () => {
    navClose();
});

//close navigation links
navItems.forEach(item => item.addEventListener('click', () => {
    navClose();
}));

//close navigation if click out of menu
document.addEventListener('click', (e) => {
    const isClickOnBurger = burgerBtn.contains(e.target);
    const isClickOnMenu = burgerNavigation.contains(e.target);

    if (!isClickOnMenu && !isClickOnBurger) {
        navClose();
    }
});

//close burger function
function navClose() {
    burgerCloseBtn.classList.remove('nav-btn-close_active');
    burgerBtn.classList.add('nav-btn-burger_active');
    burgerNavigation.classList.remove('nav_active');
}