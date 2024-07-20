const mobileNavButton = document.querySelector('.mobile-nav-btn');
const navList = document.querySelector('.nav-list');
const openIcon = document.querySelector('.icon-mobile-nav.open');
const closeIcon = document.querySelector('.icon-mobile-nav.close');

mobileNavButton.addEventListener('click', () => {
    navList.classList.toggle('open');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});
