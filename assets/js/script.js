document.addEventListener('DOMContentLoaded', function () {
  function menuHamburguer() {
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
  }
  menuHamburguer();

  function cloneProducts() {
    const c = (el) => document.querySelector(el);
    const cs = (el) => document.querySelectorAll(el);

    productsList.map((item, index) => {
      let productList = c('.models-product').cloneNode(true);

      productList.querySelector('.product-image img').src = item.img;
      productList.querySelector('.product-name span').innerHTML = item.name;
      productList.querySelector('.product-price span').innerHTML = item.price;
      productList.querySelector('.product-price-original span').innerHTML =
        item.price_original;

      productList
        .querySelector('.product-card')
        .addEventListener('click', (e) => {
          c('.product-selected-img img').src = item.img;
        });
      c('.main-index .content-product').append(productList);
    });
  }
  cloneProducts();

  function displayContainerProduct() {
    const btnProduct = document.querySelectorAll('.buyBtnProduct');
    const containerModelProduct = document.querySelector(
      '.container-models-product-selected',
    );

    btnProduct.forEach((btn) => {
      btn.addEventListener('click', () => {
        containerModelProduct.style.display = 'flex';
      });
    });
  }
  displayContainerProduct();
});
