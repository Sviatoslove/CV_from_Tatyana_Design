var icon = document.querySelector('.icon');
let menuBurger = document.querySelector('.menu__burger__header');
let menuNav = document.querySelector('.nav');
let sideBarBurger = document.querySelector('.burger__sidebar');
let sideBar = document.querySelector('.sidebar');
let wrapperBurger = document.querySelector('.wrapper__burger');
let mouseOver = document.querySelector('.mouse__over');
let mouseOverSidebar = document.querySelector('.mouse__over__sidebar');
let capabilitiesItemLink = document.querySelector('.capabilities');
let goTopBtn = document.querySelector('.back_to_top');

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, (-window.pageYOffset));
  };
};

goTopBtn.addEventListener('click', backToTop);

document.addEventListener("scroll", function() {
  if(window.pageYOffset >= 200) {
    goTopBtn.classList.add('back_to_top-show');
    menuBurger.classList.remove('open_menu');
    menuNav.classList.remove('open_menu');
    wrapperBurger.classList.remove('open_menu');
    mouseOver.classList.remove('none');
  } else {
    goTopBtn.classList.remove('back_to_top-show');
  }
});

const moveSideBarBurger = () => {
  sideBarBurger.classList.toggle('open_menu');
  sideBar.classList.toggle('open_menu');
  mouseOverSidebar.classList.contains('none');
  if(mouseOverSidebar.classList.contains('none')){
    setTimeout(() => {
      mouseOverSidebar.classList.toggle('none');
    }, 800);
  }else {
    mouseOverSidebar.classList.toggle('none')
  };
};

document.addEventListener("DOMContentLoaded", function() { 
  var widthWind = document.querySelector('body').offsetWidth;
  if (widthWind <= 768) {
    capabilitiesItemLink.addEventListener('click', moveSideBarBurger)
  }
});

const moveMenuBurger = () => {
  menuBurger.classList.toggle('open_menu');
  menuNav.classList.toggle('open_menu');
  wrapperBurger.classList.toggle('open_menu');
  mouseOver.classList.toggle('none');
}

menuBurger.addEventListener('click', moveMenuBurger);

sideBarBurger.addEventListener('click', moveSideBarBurger);

var stepLeft = 0;
var stepRight = 150;

function animeLogoPlus(a, b, ms) {
  setInterval(() => {
    if(stepLeft >= a && stepLeft <= b) {
      stepLeft += 1;
      icon.style.left = stepLeft + 'px';
    }else if(stepRight <= b && stepRight >= a) {
      stepRight -= 1;
      icon.style.left = stepRight + 'px';
    }else {
    stepLeft = a;
    stepRight = b;
    };
  }, ms);
};

animeLogoPlus(stepLeft, stepRight, 25);