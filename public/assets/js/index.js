document.addEventListener('DOMContentLoaded', function () {
  function cloneProducts() {
    const c = (el) => document.querySelector(el);

    let cartItems = {};

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
        .querySelector('.product-addCart')
        .addEventListener('click', () => {
          addToCart(item.name, item.price, item.img);
        });

      productList
        .querySelector('.product-card')
        .setAttribute('data-index', index);

      c('.main-index .content-product').append(productList);
    });

    function addToCart(productName, productPrice, productImg) {
      // Verifica se o produto já está no carrinho
      if (cartItems[productName]) {
        // Se sim, incrementa a quantidade
        cartItems[productName].quantity += 1;
        updateCartItem(productName);
      } else {
        // Se não, adiciona o produto ao carrinho
        cartItems[productName] = { quantity: 1, price: productPrice };
        // Cria o elemento no carrinho
        createCartItem(productName, productPrice, productImg);
      }

      // Atualiza a exibição no carrinho
      updateCartView();
    }

    function createCartItem(productName, productPrice, productImg) {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.dataset.productName = productName;

      cartItem.innerHTML = `
        <img src="${productImg}" alt="">
        <span>${productName}</span>
        <span class="quantity">Quantidade: 1</span>
        <span>Preço: R$ ${productPrice}</span>
      `;

      c('.aside-cart').appendChild(cartItem);

      updateCartView();
    }

    function updateCartItem(productName) {
      const cartItem = c(`.cart-item[data-product-name="${productName}"]`);
      const quantityElement = cartItem.querySelector('.quantity');
      cartItem.dataset.quantity += 1;
      quantityElement.textContent = `Quantidade: ${cartItems[productName].quantity}`;
    }

    function updateCartView() {
      // Atualiza a exibição do número total de produtos no carrinho
      const totalQuantity = Object.values(cartItems).reduce(
        (total, item) => total + item.quantity,
        0,
      );
      c('.cart-total').innerText = `${totalQuantity}`;
      c('.cart-total').style.display = 'flex';
    }
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
