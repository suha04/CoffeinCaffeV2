const hamburger = document.querySelector('#hamburger');
const navDivs = document.querySelectorAll('.navDiv');
const nav = document.querySelector('nav');
const navList = document.getElementById("navList");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    navDivs.forEach(navDiv => navDiv.classList.toggle('active'));
});