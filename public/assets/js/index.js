document.addEventListener('DOMContentLoaded', function () {
  function cloneProducts() {
    const c = (el) => document.querySelector(el);
    const cs = (el) => document.querySelectorAll(el);

    productsList.map((item, index) => {
      let productList = c('.models-product').cloneNode(true);

      productList.querySelector('.product-image img').src = item.img;
      productList.querySelector('.product-name span').innerHTML = item.name;
      productList.querySelector(
        '.product-price span',
      ).innerHTML = `R$ ${item.price}`;
      productList.querySelector(
        '.product-price-original span',
      ).innerHTML = `R$ ${item.price_original}`;

      // productList
      //   .querySelector('.product-card')
      //   .addEventListener('click', (e) => {
      //     c('.product-selected-img img').src = item.img;
      //     c('.product-selected-name span').innerHTML = item.name;
      //     c('.product-selected-price span').innerHTML = `R$ ${item.price}`;
      //     c(
      //       '.product-selected-price-original span',
      //     ).innerHTML = `R$ ${item.price_original}`;
      //   });

      productList
        .querySelector('.product-card')
        .setAttribute('data-index', index);

      c('.main-index .content-product').append(productList);
    });
  }
  cloneProducts();

  function displayContainerProduct() {
    const btnProduct = document.querySelectorAll('.product-card');

    btnProduct.forEach((btn, index) => {
      btn.addEventListener('click', (event) => {
        event.stopPropagation();

        const selectedProductIndex = btn.getAttribute('data-index');
        const selectedProduct = productsList[selectedProductIndex];

        // Armazena o produto selecionado em localStorage
        localStorage.setItem(
          'selectedProduct',
          JSON.stringify(selectedProduct),
        );

        const productUrl = `produto.html?id=${
          selectedProduct.id
        }&name=${encodeURIComponent(selectedProduct.name)}&price=${
          selectedProduct.price
        }`;

        // Redireciona para produto.html
        window.location.href = productUrl;
      });
    });
  }
  displayContainerProduct();
});
