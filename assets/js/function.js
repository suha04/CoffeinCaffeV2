const hamburger = document.querySelector('#hamburger');
const navDivs = document.querySelectorAll('.navDiv');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navDivs.forEach(navDiv => navDiv.classList.toggle('active'));
});