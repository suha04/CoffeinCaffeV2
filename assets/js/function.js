const hamburger = document.querySelector('#hamburger');
const navDivs = document.querySelectorAll('.navDiv');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    navDivs.forEach(navDiv => navDiv.classList.toggle('active'));
});


  let prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".fixed-nav").classList.remove("hide-nav");
    } else {
      document.querySelector(".fixed-nav").classList.add("hide-nav");
    }
    prevScrollpos = currentScrollPos;
  }
