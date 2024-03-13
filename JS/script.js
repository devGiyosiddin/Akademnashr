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

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});