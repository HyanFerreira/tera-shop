document.addEventListener('DOMContentLoaded', function () {
  var carouselSlide = document.querySelector('.carousel-slide');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');

  function updateBannerSlides() {
    return document.querySelectorAll('.banner-slide');
  }

  prevBtn.addEventListener('click', function () {
    carouselSlide.insertBefore(
      bannerSlides[bannerSlides.length - 1],
      bannerSlides[0],
    );
    bannerSlides = updateBannerSlides();
  });

  nextBtn.addEventListener('click', function () {
    carouselSlide.appendChild(bannerSlides[0]);
    bannerSlides = updateBannerSlides();
  });

  var bannerSlides = updateBannerSlides();

  function autoAdvanceSlide() {
    nextBtn.click();
  }

  var intervalId = setInterval(autoAdvanceSlide, 5000);

  carouselSlide.addEventListener('mouseenter', function () {
    clearInterval(intervalId);
  });

  carouselSlide.addEventListener('mouseleave', function () {
    intervalId = setInterval(autoAdvanceSlide, 5000);
  });

  prevBtn.addEventListener('mouseenter', function () {
    clearInterval(intervalId);
  });

  prevBtn.addEventListener('mouseleave', function () {
    intervalId = setInterval(autoAdvanceSlide, 5000);
  });

  nextBtn.addEventListener('mouseenter', function () {
    clearInterval(intervalId);
  });

  nextBtn.addEventListener('mouseleave', function () {
    intervalId = setInterval(autoAdvanceSlide, 5000);
  });
});
