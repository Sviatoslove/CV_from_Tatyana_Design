var icon = document.querySelector('.icon');
let menuBurger = document.querySelector('.menu__burger__header');
let menuNav = document.querySelector('.nav');

menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('open_menu');
  menuNav.classList.toggle('open_menu');
});

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