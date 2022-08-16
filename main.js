var icon = document.querySelector('.icon');
let menuBurger = document.querySelector('.menu__burger__header');
let menuNav = document.querySelector('.nav');
let sideBarBurger = document.querySelector('.burger__sidebar');
let sideBar = document.querySelector('.sidebar');
let wrapperBurger = document.querySelector('.wrapper__burger');

sideBarBurger.addEventListener('mousemove', () => {
  if(!sideBarBurger.classList.contains('open_menu')) {
    sideBarBurger.innerHTML = `
    <div class="mouse__over__sidebar">Карточка с фото</div>
    <span></span>
  `;
  }
});

sideBarBurger.addEventListener('mouseout', () => {
  sideBarBurger.innerHTML = `<span></span>`
});

menuBurger.addEventListener('mousemove', () => {
  if(!menuBurger.classList.contains('open_menu')) {
    menuBurger.innerHTML = `
    <div class="mouse__over">Меню</div>
    <span></span>
  `;
  }
});

menuBurger.addEventListener('mouseout', () => {
  menuBurger.innerHTML = `<span></span>`
});

menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('open_menu');
  menuNav.classList.toggle('open_menu');
  wrapperBurger.classList.toggle('open_menu');
});


sideBarBurger.addEventListener('click', () => {
  sideBarBurger.classList.toggle('open_menu');
  sideBar.classList.toggle('open_menu');
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