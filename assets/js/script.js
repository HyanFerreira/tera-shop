document.addEventListener('DOMContentLoaded', function () {
  const hamburguer = document.querySelector('.hamburguer');
  const asideNavigation = document.querySelector('.aside-navigation');
  const overlow = document.querySelector('.overlow');
  const bodyOverflow = document.querySelector('body');

  hamburguer.addEventListener('click', () => {
    overlow.classList.toggle('active');
    bodyOverflow.classList.toggle('active');
    asideNavigation.classList.toggle('active');
  });

  overlow.addEventListener('click', () => {
    overlow.classList.toggle('active');
    bodyOverflow.classList.toggle('active');
    asideNavigation.classList.toggle('active');
  });
});
