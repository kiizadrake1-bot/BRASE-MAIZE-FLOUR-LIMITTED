document.querySelectorAll('.menu-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const navigation = button.parentElement.querySelector('.site-nav');
    const isOpen = navigation.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
});

const reservationForm = document.querySelector('#reservation-form');
if (reservationForm) {
  reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!reservationForm.reportValidity()) return;

    const formData = new FormData(reservationForm);
    const size = formData.get('size');
    const quantity = Number(formData.get('quantity'));
    const unitPrice = Number(reservationForm.querySelector('#flour-size').selectedOptions[0].dataset.price);
    const total = new Intl.NumberFormat('en-UG').format(unitPrice * quantity);
    const message = [
      'Hello BRASE MAIZE FLOUR, I would like to make a reservation.',
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone')}`,
      `Order: ${size}kg bag x ${quantity}`,
      `Estimated total: UGX ${total}`,
      formData.get('notes') ? `Notes: ${formData.get('notes')}` : ''
    ].filter(Boolean).join('\n');

    window.location.href = `https://wa.me/256792688027?text=${encodeURIComponent(message)}`;
  });
}

const feedbackForm = document.querySelector('#feedback-form');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!feedbackForm.reportValidity()) return;

    const formData = new FormData(feedbackForm);
    const subject = encodeURIComponent(`Website feedback from ${formData.get('name')}`);
    const body = encodeURIComponent(`Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`);
    window.location.href = `mailto:kiizadrake1@gmail.com?subject=${subject}&body=${body}`;
  });
}