const hamburger = document.querySelector('#hamburger');
const navDivs = document.querySelectorAll('.navDiv');
const nav = document.querySelector('nav');

const currentScrollPos = window.pageYOffset;



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    navDivs.forEach(navDiv => navDiv.classList.toggle('active'));
});





window.onscroll = function() {
    let prevScrollpos = window.pageYOffset;

  if (prevScrollpos == currentScrollPos) {
    // Show the navigation bar
    nav.classList.remove("hidden");
  } 
  else {
    // Hide the navigation bar
    hamburger.classList.remove('active');
    navDivs.forEach(navDiv => navDiv.classList.remove('active'));
    nav.classList.remove('active');
  }
  
  prevScrollpos = currentScrollPos;
}