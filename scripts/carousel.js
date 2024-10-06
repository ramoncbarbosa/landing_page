const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
});

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
};

nextButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide') || slides[0];
  const nextSlide = currentSlide.nextElementSibling;

  if (nextSlide) {
    moveToSlide(track, currentSlide, nextSlide);
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
  }
});

prevButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide') || slides[0];
  const prevSlide = currentSlide.previousElementSibling;

  if (prevSlide) {
    moveToSlide(track, currentSlide, prevSlide);
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');
  }
});
