// Update the footer year automatically
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Capture form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Replace with your email service logic (EmailJS, Formspree, etc.)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}
