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
let sloganText = document.querySelector('.slogan__text');
let wrapperSidebarBurger = document.querySelector('.wrapper__sidebar__burger');
let tel = document.querySelector('.tel');

document.addEventListener('click', e => {
  const backlight = (elem) => {
    setTimeout(() => {
      elem.classList.add('backlight')
    }, 1150);
    setTimeout(() => {
      elem.classList.remove('backlight')
    }, 1350);
  }
  let menuLink = document.querySelectorAll('.menu__link');
  let backlightItem = document.querySelectorAll('.backlight_item');
  if(e.target === menuLink[0]) {
    backlight(backlightItem[3]);
  }else if(e.target === menuLink[1]) {
    backlight(backlightItem[0]);
  }else if(e.target === menuLink[2]) {
    backlight(backlightItem[2]);
  }else if(e.target === menuLink[3]) {
    backlight(backlightItem[4]);
  }else if(e.target === menuLink[4]) {
    backlight(backlightItem[5]);
  }else if(e.target === menuLink[5]) {
    backlight(backlightItem[1]);
  }
})

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
    sloganText.classList.remove('open__menu__slogan__text');

  }else {
    goTopBtn.classList.remove('back_to_top-show');
  }
});

const moveSideBarBurger = () => {
  sideBarBurger.classList.toggle('open_menu');
  sideBar.classList.toggle('open_menu');
  wrapperSidebarBurger.classList.toggle('open_menu');
  if(mouseOverSidebar.classList.contains('none')){
    setTimeout(() => {
      mouseOverSidebar.classList.toggle('none');
    }, 800);
  }else {
    mouseOverSidebar.classList.toggle('none')
  };
};

document.addEventListener("DOMContentLoaded", function() { 
  let widthWind = document.querySelector('body').offsetWidth;
  moveMenuBurger(widthWind);
});

const moveMenuBurger = z => {
  const toggle = () => {
    menuBurger.classList.toggle('open_menu');
    menuNav.classList.toggle('open_menu');
    wrapperBurger.classList.toggle('open_menu');
    mouseOver.classList.toggle('none');
  }
  if(z <= 576) {
    menuBurger.addEventListener('click', () => {
      toggle();
      sloganText.classList.toggle('open__menu__slogan__text');
    });
    capabilitiesItemLink.addEventListener('click', moveSideBarBurger);
  }  else if(z <= 768) {
    menuBurger.addEventListener('click', () => {
      toggle();
    });
    capabilitiesItemLink.addEventListener('click', moveSideBarBurger);
  }  else {
    menuBurger.addEventListener('click', toggle);
  };
};

sideBarBurger.addEventListener('click', moveSideBarBurger);
tel.addEventListener('click', moveSideBarBurger);


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