let icon = document.querySelector('.icon');
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
let menuLink = document.querySelectorAll('.menu__link');
let backlightItem = document.querySelectorAll('.backlight_item');


const mediaQuery = window.matchMedia('(max-width: 538px)')

const backlight = elemMenu => {
  let timeoutBacklight = elem => {
    setTimeout(() => {
      elem.classList.add('backlight')
    }, 1150);
    setTimeout(() => {
      elem.classList.remove('backlight')
    }, 1350);
  };
  if(elemMenu === menuLink[0]) {
    timeoutBacklight(backlightItem[3]);
  }else if(elemMenu === menuLink[1]) {
    if(sideBarBurger.classList.contains('open_menu')) {
    timeoutBacklight(backlightItem[0]);
    }else {
      moveSideBarBurger();
      timeoutBacklight(backlightItem[0]);
    };
  }else if(elemMenu === menuLink[2]) {
    timeoutBacklight(backlightItem[2]);
  }else if(elemMenu === menuLink[3]) {
    timeoutBacklight(backlightItem[4]);
  }else if(elemMenu === menuLink[4]) {
    timeoutBacklight(backlightItem[5]);
  }else if(elemMenu === menuLink[5]) {
    if(sideBarBurger.classList.contains('open_menu')) {
    timeoutBacklight(backlightItem[1]);
    }else {
      moveSideBarBurger();
      timeoutBacklight(backlightItem[1]);
    };
  }
};

const backToTop = () => {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, (-window.pageYOffset));
  };
};

const closeBurgerMenu = () => {
  menuBurger.classList.remove('open_menu');
  menuNav.classList.remove('open_menu');
  wrapperBurger.classList.remove('open_menu');
  mouseOver.classList.remove('none');
  sloganText.classList.remove('open__menu__slogan__text');
}

const closeBurgerSidebar = () => {
  sideBarBurger.classList.remove('open_menu');
  sideBar.classList.remove('open_menu');
  wrapperSidebarBurger.classList.remove('open_menu');
}


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

const moveMenuBurger = () => {
  menuBurger.classList.toggle('open_menu');
  menuNav.classList.toggle('open_menu');
  wrapperBurger.classList.toggle('open_menu');
  mouseOver.classList.toggle('none');
}

const checkNone = () => {
  if(mouseOverSidebar.classList.contains('none')) {
    mouseOverSidebar.classList.remove('none');
  };
};

document.addEventListener("scroll", function() {
  if(window.pageYOffset >= 50) {
    goTopBtn.classList.add('back_to_top-show');
    closeBurgerMenu();
  }else {
    goTopBtn.classList.remove('back_to_top-show');
  }
});

goTopBtn.addEventListener('click', () => {
  backToTop();
  closeBurgerSidebar();
  checkNone();
});

const handleTabletChange = event => {
  console.log(`change`)
  let widthWind = document.querySelector('body').offsetWidth;
  document.addEventListener('click', e => {
    if(widthWind <= 768) {
      console.log(1)
      if(e.target === sideBarBurger && widthWind > 576) {
        console.log(e.target === sideBarBurger)
        moveSideBarBurger();
        closeBurgerSidebar();
        checkNone();
      }else if(e.target === menuBurger) {
        moveMenuBurger();
      };
      if(widthWind <= 576) {
        console.log(3)
        console.log(event.matches)
        if(event.matches) {
          console.log(2)
          if(e.target === menuBurger) {
            console.log(e.target === menuBurger)
            moveMenuBurger();
            sloganText.classList.toggle('open__menu__slogan__text');
          }
          backlight(e.target);
        }else if (e.target === sideBarBurger) {
          moveSideBarBurger();
        }else if (e.target === sideBarBurger) {
          moveMenuBurger();
        };
      };
      backlight(e.target);
    } else {
      moveMenuBurger();
      backlight(e.target);
    };
  });
};

mediaQuery.addListener(() => {
  if(mediaQuery) {
    closeBurgerMenu();
    closeBurgerSidebar();
    checkNone();
  }else {
    closeBurgerMenu();
    closeBurgerSidebar();
    checkNone();
  };
});

mediaQuery.addListener(handleTabletChange(mediaQuery))























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