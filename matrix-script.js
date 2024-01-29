const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const closeMenu = document.querySelector('#close-menu');
const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    overlay.style.display = 'block'; // Affiche l'overlay lorsque le menu est ouvert
});

closeMenu.addEventListener('click', () => {
    navList.classList.remove('active');
    overlay.style.display = 'none'; // Cache l'overlay lorsque le menu est fermé
});

overlay.addEventListener('click', () => {
    navList.classList.remove('active'); 
    overlay.style.display = 'none'; // Permet également de fermer le menu en cliquant sur l'overlay
});
