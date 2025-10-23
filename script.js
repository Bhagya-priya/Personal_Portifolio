
document.addEventListener("DOMContentLoaded", () => {
  // Activate first slide for every slider
  document.querySelectorAll(".slider").forEach(slider => {
    const slides = slider.querySelectorAll(".slide");
    slides[0].classList.add("active");
  });

  // Slider navigation function
  function changeSlide(sliderId, direction) {
    const slider = document.querySelector(`.slider[data-slider-id="${sliderId}"]`);
    const slides = slider.querySelectorAll(".slide");
    let currentIndex = [...slides].findIndex(slide => slide.classList.contains("active"));

    slides[currentIndex].classList.remove("active");
    let nextIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[nextIndex].classList.add("active");
  }

  // Next Button
  document.querySelectorAll(".slider-next").forEach(btn => {
    btn.addEventListener("click", () => {
      changeSlide(btn.dataset.sliderId, 1);
    });
  });

  // Prev Button
  document.querySelectorAll(".slider-prev").forEach(btn => {
    btn.addEventListener("click", () => {
      changeSlide(btn.dataset.sliderId, -1);
    });
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('Oops! Something went wrong.');
    }
  }).catch(() => alert('Oops! Could not send message.'));
});


