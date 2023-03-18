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



//Carousel

const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides');
const slideCounter = carousel.querySelector('.slideCounter');
let slideWidth = 100;
let currentSlide = 0;

function goToSlide(slide) {
  slides.style.transform = `translateX(-${slide * slideWidth}%)`;
  currentSlide = slide;
  setActiveClass();
  updateSlideCounter();
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
  } else {
    goToSlide(slides.children.length - 1);
  }
}

function handleNextClick() {
  if (currentSlide < slides.children.length - 1) {
    goToSlide(currentSlide + 1);
  } else {
    goToSlide(0);
  }
}

function updateSlideCounter() {
  const totalSlides = slides.children.length;
  slideCounter.innerHTML = `${currentSlide + 1}/${totalSlides}`;
}

carousel.querySelector('.prev').addEventListener('click', handlePrevClick);
carousel.querySelector('.next').addEventListener('click', handleNextClick);

updateSlideCounter();




//Aktív nav elemek

const navLinks = document.querySelectorAll('#navList a');

// Linkek figyelése klikkhez
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // aktív eltávolítása minden navelemről
    navLinks.forEach(link => link.classList.remove('active'));

    // klikkelt elemek aktívvá tétele
    link.classList.add('active');
  });
});

// első nav elemhez .active, oldaltöltéskor
navLinks[0].classList.add('active');

// aktív elem frissítés görgetésnél
window.addEventListener('scroll', () => {
  // görgetés pozíció
  const scrollPos = window.scrollY;

  // minden nav elem figyelembe vétele
  navLinks.forEach(link => {
    // link hivatkozása
    const anchor = document.querySelector(link.hash);

    // hivatkozás létezik és legalább 10vh-re van-e a felső szélétől
    if (anchor && anchor.getBoundingClientRect().top < window.innerHeight - window.innerHeight * 0.5) {
      // aktív eltávolítása minden navelemről
      navLinks.forEach(link => link.classList.remove('active'));

      // aktív hozzáadása jelenlegi navelemhez
      link.classList.add('active');
    }
  });
});