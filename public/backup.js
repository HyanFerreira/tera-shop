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
      productList.querySelector(
        '.product-price span',
      ).innerHTML = `R$ ${item.price}`;
      productList.querySelector(
        '.product-price-original span',
      ).innerHTML = `R$ ${item.price_original}`;

      productList
        .querySelector('.product-card')
        .addEventListener('click', (e) => {
          c('.product-selected-img img').src = item.img;
          c('.product-selected-name span').innerHTML = item.name;
          c('.product-selected-price span').innerHTML = `R$ ${item.price}`;
          c(
            '.product-selected-price-original span',
          ).innerHTML = `R$ ${item.price_original}`;
        });
      c('.main-index .content-product').append(productList);
    });
  }
  cloneProducts();

  function displayContainerProduct() {
    const btnProduct = document.querySelectorAll('.product-card');
    const btnBack = document.querySelector('.btnBack');
    const containerModelProduct = document.querySelector(
      '.container-models-product-selected',
    );
    const mainIndex = document.querySelector('.main-index');
    const headerIndex = document.querySelector('.header-index');
    let scrollPosition = 0;

    btnProduct.forEach((btn) => {
      btn.addEventListener('click', () => {
        scrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;

        containerModelProduct.style.display = 'flex';
        mainIndex.style.display = 'none';
        headerIndex.style.display = 'none';
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    });
    btnBack.addEventListener('click', () => {
      containerModelProduct.style.display = 'none';
      mainIndex.style.display = 'flex';
      headerIndex.style.display = 'flex';

      window.scrollTo(0, scrollPosition);
    });
  }
  displayContainerProduct();
  function calcularTempoRestante() {
    // Data alvo: 24 de novembro de 2023 às 23h59
    const dataAlvo = new Date('2023-11-23T23:59:59');

    // Data atual
    const agora = new Date();

    // Calcula a diferença em milissegundos entre as datas
    const diferenca = dataAlvo - agora;

    // Calcula dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Retorna um objeto com os valores calculados
    return {
      dias,
      horas,
      minutos,
      segundos,
    };
  }

  function atualizarTempoRestante() {
    const tempoRestante = calcularTempoRestante();
    const elementoTempoRestante = document.getElementById('timer-blackfriday');

    // Atualiza o conteúdo do elemento HTML
    elementoTempoRestante.textContent = `0${tempoRestante.dias}D ${tempoRestante.horas}h ${tempoRestante.minutos}min ${tempoRestante.segundos}s`;
  }

  // Atualiza o tempo restante a cada segundo
  setInterval(atualizarTempoRestante, 1000);
});
