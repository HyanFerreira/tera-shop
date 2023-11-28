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

// document.addEventListener('DOMContentLoaded', function () {
//   let btnNext = document.querySelector('.nextBtnProducts');
//   let btnPrevious = document.querySelector('.prevBtnProducts');
//   let carousel = document.querySelector('.content-product');
//   let currentPosition = 0;

//   // Define o tamanho de cada card e o espaçamento entre eles
//   let cardWidth = 268; //elemento chave, aqui pode ser inserido o tamanho desejado do card
//   let cardSpacing = 30; //elemento chave, insia aqui o espaçamento entre os cards
//   let cardPositionNext = (cardWidth + cardSpacing) * 3;
//   let cardPositionPrevious = (cardWidth + cardSpacing) * 4; // se são 4 imagens a serem exibidas, subtraia 1 do cardPositionNext

//   // Calcula o deslocamento com base no número de cards
//   let numCards = document.querySelectorAll('.product-card').length;
//   let totalWidthNext = numCards * (cardWidth + cardSpacing) - cardPositionNext;
//   let totalWidthPrevious =
//     numCards * (cardWidth + cardSpacing) - cardPositionPrevious;

//   // Função NEXT
//   btnNext.addEventListener('click', () => {
//     currentPosition -= cardWidth + cardSpacing;
//     if (currentPosition <= -totalWidthNext) {
//       currentPosition = 0;
//     }
//     carousel.style.transform = `translateX(${currentPosition}px)`;
//   });

//   // Função PREVIOUS
//   btnPrevious.addEventListener('click', () => {
//     if (currentPosition === 0) {
//       currentPosition = -totalWidthPrevious;
//     } else {
//       currentPosition += cardWidth + cardSpacing;
//     }
//     carousel.style.transform = `translateX(${currentPosition}px)`;
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.content-product');
  const prevBtn = document.querySelector('.prevBtnProducts');
  const nextBtn = document.querySelector('.nextBtnProducts');

  let isTransitioning = false;
  let cardWidth = 268; // Largura fixa do card
  let gap = 30; // Espaçamento entre os cards

  nextBtn.addEventListener('click', () => {
    if (!isTransitioning) {
      isTransitioning = true;
      slider.style.transition = 'transform 900ms';
      slider.style.transform = `translate(-${cardWidth + gap}px)`;
    }
  });

  prevBtn.addEventListener('click', () => {
    if (!isTransitioning) {
      isTransitioning = true;
      slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
      slider.style.transition = 'none';
      slider.style.transform = `translate(-${cardWidth + gap}px)`;
      setTimeout(() => {
        slider.style.transition = 'transform 900ms';
        slider.style.transform = 'translate(0)';
        isTransitioning = false;
      }, 0);
    }
  });

  slider.addEventListener('transitionend', () => {
    slider.style.transition = 'none';
    if (isTransitioning) {
      if (slider.style.transform === `translate(-${cardWidth + gap}px)`) {
        slider.appendChild(slider.firstElementChild);
      }
      slider.style.transform = 'translate(0)';
      setTimeout(() => {
        slider.style.transition = 'transform 900ms';
        isTransitioning = false;
      });
    }
  });

  updateSliderWidth();

  window.addEventListener('resize', updateSliderWidth);

  function updateSliderWidth() {
    const numCards = document.querySelectorAll('.product-card').length;

    const sliderWidth = (cardWidth + gap) * numCards;
    slider.style.width = `${sliderWidth}px`;
  }
});
