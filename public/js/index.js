function nextImageCarousel() {
  const carousel = document.getElementById('carousel');
  carousel.scrollBy(300, 0);
}

function previousImageCarousel() {
  const carousel = document.getElementById('carousel');
  carousel.scrollBy(-300, 0);
}