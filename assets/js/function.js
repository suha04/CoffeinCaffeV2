//Hamburger gomb működése

const hamburger = document.querySelector('#hamburger');
const navDivs = document.querySelectorAll('.navDiv');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    navDivs.forEach(navDiv => navDiv.classList.toggle('active'));
});



//Navbar eltűnik görgetésre

const currentScrollPos = window.pageYOffset;
window.onscroll = function() {
    let prevScrollpos = window.pageYOffset;

  if (prevScrollpos == currentScrollPos) {
// Látszódó navbar
    nav.classList.remove("hidden");
  } 
  else {
// Rejtett navbar
    hamburger.classList.remove('active');
    navDivs.forEach(navDiv => navDiv.classList.remove('active'));
    nav.classList.remove('active');
  }  
  prevScrollpos = currentScrollPos;
}



//carousel

const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides');
let slideWidth = 100;
let currentSlide = 0;

function goToSlide(slide) {
  slides.style.transform = `translateX(-${slide * slideWidth}%)`;
  currentSlide = slide;
  setActiveClass();
}

function setActiveClass() {
  const active = carousel.querySelector('.slide.active');
  if (active) {
    active.classList.remove('active');
  }
  carousel.querySelectorAll('.slide')[currentSlide].classList.add('active');
}

function handlePrevClick() {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
  }
}

function handleNextClick() {
  if (currentSlide < slides.children.length - 1) {
    goToSlide(currentSlide + 1);
  }
}

carousel.querySelector('.prev').addEventListener('click', handlePrevClick);
carousel.querySelector('.next').addEventListener('click', handleNextClick);

goToSlide(0);