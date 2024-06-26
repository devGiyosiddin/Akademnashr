// Menu
const elMenuButton = document.querySelector('.js-menu-button');
const elSiteActions = document.querySelector('.site-header-actions');
const elSiteHeader = document.querySelector('#site-header');
if(elMenuButton) {
    elMenuButton.addEventListener('click', function() {
    elSiteActions.classList.toggle('menu-list--open');
    elSiteHeader.classList.toggle('bgcolor');
    });
};
const elsSitenavLink = document.querySelectorAll('.sitenav-link');
elsSitenavLink.forEach(function (elLink) {
    elLink.addEventListener('click', function() {
    elSiteActions.classList.remove('menu-list--open');
    elMenuButton.classList.remove('menu--open');
    elSiteHeader.classList.remove('bgcolor');
    });
});
const elMainLink = document.querySelector('.main-link');
if(elMainLink) {
    elMainLink.addEventListener('click', function() {
    elSiteActions.classList.remove('menu-list--open');
    elMenuButton.classList.remove('menu--open');
    });
};

// THEME SWITCHER
const themeSwitcher = document.querySelector('#theme-switcher');
themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});


// Проверяем, поддерживает ли браузер Media Query prefers-color-scheme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Если пользователь предпочитает темную тему, добавляем класс dark-theme к <body>
    document.body.classList.add('dark-theme');
} else {
    // В противном случае, если пользователь предпочитает светлую тему, удаляем класс dark-theme
    document.body.classList.remove('dark-theme');
}

// Обработчик события изменения темы у пользователя
window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
    const darkModeOn = e.matches;
    // Если darkModeOn === true, пользователь предпочитает темную тему
    // Если darkModeOn === false, пользователь предпочитает светлую тему
    if (darkModeOn) {
        // Добавляем класс dark-theme к <body>
        document.body.classList.add('dark-theme');
    } else {
        // Удаляем класс dark-theme из <body>
        document.body.classList.remove('dark-theme');
    };
});