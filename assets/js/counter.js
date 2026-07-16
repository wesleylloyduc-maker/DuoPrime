const counters = document.querySelectorAll('.counter-card h3');

const animateCounter = (element) => {
  const target = Number(element.dataset.target || 0);
  const duration = 1400;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * target);
    element.textContent = value.toString();
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = target.toString();
    }
  };

  requestAnimationFrame(step);
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach((counter) => counterObserver.observe(counter));
