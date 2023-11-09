const hamburguer = document.querySelector('.hamburguer');
const asideNavigation = document.querySelector('.aside-navigation');
const overlow = document.querySelector('.overlow');
const bodyOverflow = document.querySelector('body');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  overlow.classList.toggle('active');
  bodyOverflow.classList.toggle('active');
  asideNavigation.classList.toggle('active');
});
