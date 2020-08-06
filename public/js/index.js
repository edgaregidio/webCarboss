document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');

  function nextImageCarousel() {
    carousel.scrollBy(300, 0);
  }

  function previousImageCarousel() {
    carousel.scrollBy(-300, 0);
  }
});