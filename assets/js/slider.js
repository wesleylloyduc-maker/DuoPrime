const heroSlides = Array.from(document.querySelectorAll('.hero-slide'));
const heroDots = Array.from(document.querySelectorAll('.hero-controls .slider-dot'));
let heroIndex = 0;

function showHeroSlide(index) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, i) => slide.classList.toggle('active', i === heroIndex));
  heroDots.forEach((dot, i) => dot.classList.toggle('active', i === heroIndex));
}

heroDots.forEach((dot, index) => {
  dot.addEventListener('click', () => showHeroSlide(index));
});

setInterval(() => showHeroSlide(heroIndex + 1), 6000);

const testimonialSlides = Array.from(document.querySelectorAll('.testimonial-slide'));
const testimonialDots = Array.from(document.querySelectorAll('.testimonial-controls .slider-dot'));
let testimonialIndex = 0;

function showTestimonial(index) {
  testimonialIndex = (index + testimonialSlides.length) % testimonialSlides.length;
  testimonialSlides.forEach((slide, i) => slide.classList.toggle('active', i === testimonialIndex));
  testimonialDots.forEach((dot, i) => dot.classList.toggle('active', i === testimonialIndex));
}

testimonialDots.forEach((dot, index) => {
  dot.addEventListener('click', () => showTestimonial(index));
});

setInterval(() => showTestimonial(testimonialIndex + 1), 7000);
