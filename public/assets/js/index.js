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
        <img class="aside-cart-img" src="${productImg}" alt="">
        <div class="aside-cart-name-price">
            <span class="aside-cart-name">${productName}</span>
            <div class="aside-cart-qnt-price">
              <span class="aside-cart-price">Preço: R$ ${productPrice}</span>
              <div class="aside-cart-add-remove">
                <div class="remove">-</div>
                <span class="quantity">1</span>
                <div class="add">+</div>
              </div>
          </div>
        </div>
      `;

      const addBtn = cartItem.querySelector('.add');
      const removeBtn = cartItem.querySelector('.remove');
      const quantityElement = cartItem.querySelector('.quantity');

      addBtn.addEventListener('click', () => {
        cartItems[productName].quantity += 1;
        quantityElement.textContent = `${cartItems[productName].quantity}`;
        updateCartView();
      });

      removeBtn.addEventListener('click', () => {
        if (cartItems[productName].quantity > 1) {
          cartItems[productName].quantity -= 1;
          quantityElement.textContent = `${cartItems[productName].quantity}`;
        } else {
          delete cartItems[productName];
          c('.cart-item[data-product-name="' + productName + '"]').remove();
        }
        updateCartView();
      });

      c('.aside-cart').appendChild(cartItem);

      updateCartView();
    }

    function updateTotalPrice() {
      const totalPriceElement = c('.total-price-cart');

      // Calcula o preço total somando os preços de todos os itens no carrinho
      const totalPrice = Object.values(cartItems).reduce(
        (total, item) =>
          total +
          item.quantity * Number(item.price.replace('.', '').replace(',', '.')),
        0,
      );

      // Formata o preço total com separadores de milhar e duas casas decimais
      const formattedTotalPrice = totalPrice.toLocaleString('pt-BR', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      // Exibe o preço total formatado no elemento correspondente
      totalPriceElement.innerText = `Total: R$ ${formattedTotalPrice}`;

      // Exibe ou oculta o elemento do preço total com base na existência de itens no carrinho
      totalPriceElement.style.display =
        Object.keys(cartItems).length > 0 ? 'block' : 'flex';
    }

    function updateCartItem(productName) {
      const cartItem = c(`.cart-item[data-product-name="${productName}"]`);
      const quantityElement = cartItem.querySelector('.quantity');
      cartItem.dataset.quantity += 1;
      quantityElement.textContent = `${cartItems[productName].quantity}`;
    }

    function updateCartView() {
      // Atualiza a exibição do número total de produtos no carrinho
      const totalQuantity = Object.values(cartItems).reduce(
        (total, item) => total + item.quantity,
        0,
      );
      c('.cart-total').innerText = `${totalQuantity}`;
      c('.cart-total').style.display = 'flex';
      if (totalQuantity >= 1) {
        c('.text-cart').style.display = 'none';
      } else {
        c('.text-cart').style.display = 'flex';
      }

      updateTotalPrice();
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
