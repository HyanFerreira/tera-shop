// const productContainers = [...document.querySelectorAll('.product-container')];
// const prevBtnProducts = [...document.querySelectorAll('.prevBtnProducts')];
// const nextBtnProducts = [...document.querySelectorAll('.nextBtnProducts')];

// productContainers.forEach((item, i) => {
//   let containerDimenstions = item.getBoundingClientRect();
//   let containerWidth = containerDimenstions.width;

//   nextBtnProducts[i].addEventListener('click', () => {
//     item.scrollLeft += containerWidth;
//   });

//   prevBtnProducts[i].addEventListener('click', () => {
//     item.scrollLeft -= containerWidth;
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  let btnNext = document.querySelector('.nextBtnProducts');
  let btnPrevious = document.querySelector('.prevBtnProducts');
  let carousel = document.querySelector('.content-product');
  let currentPosition = 0;

  // Define o tamanho de cada card e o espaçamento entre eles
  let cardWidth = 268; //elemento chave, aqui pode ser inserido o tamanho desejado do card
  let cardSpacing = 30; //elemento chave, insia aqui o espaçamento entre os cards
  let cardPositionNext = (cardWidth + cardSpacing) * 4;
  let cardPositionPrevious = (cardWidth + cardSpacing) * 5;

  // Calcula o deslocamento com base no número de cards
  let numCards = document.querySelectorAll('.product-card').length;
  let totalWidthNext = numCards * (cardWidth + cardSpacing) - cardPositionNext;
  let totalWidthPrevious =
    numCards * (cardWidth + cardSpacing) - cardPositionPrevious;

  // Função NEXT
  btnNext.addEventListener('click', () => {
    currentPosition -= cardWidth + cardSpacing;
    if (currentPosition <= -totalWidthNext) {
      currentPosition = 0;
    }
    carousel.style.transform = `translateX(${currentPosition}px)`;
  });

  // Função PREVIOUS
  btnPrevious.addEventListener('click', () => {
    if (currentPosition === 0) {
      currentPosition = -totalWidthPrevious;
    } else {
      currentPosition += cardWidth + cardSpacing;
    }
    carousel.style.transform = `translateX(${currentPosition}px)`;
  });
});
