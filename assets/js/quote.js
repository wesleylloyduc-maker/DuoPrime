const quoteForm = document.querySelector('.contact-form');

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    const name = quoteForm.querySelector('input[name="name"]');
    const email = quoteForm.querySelector('input[name="email"]');
    const message = quoteForm.querySelector('textarea[name="message"]');

    if (!name?.value.trim() || !email?.value.trim() || !message?.value.trim()) {
      event.preventDefault();
    }
  });
}
