// Smooth scroll för meny
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Enkel RSVP feedback
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('response-message').textContent = "Tack för din OSA! 🎉";
  this.reset();
});
