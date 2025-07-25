const cursorDot = document.getElementById("cursor-dot");

let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0;
const speed = 0.15;

// Update target position
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate the dot toward the mouse
function animate() {
  dotX += (mouseX - dotX) * speed;
  dotY += (mouseY - dotY) * speed;

  cursorDot.style.top = `${dotY}px`;
  cursorDot.style.left = `${dotX}px`;

  requestAnimationFrame(animate);
}
animate();

// Grow on hover over interactive elements
const interactiveElements = document.querySelectorAll("a, button, h1");

interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursorDot.style.transform = "translate(-50%, -50%) scale(2)";
  });
  el.addEventListener("mouseleave", () => {
    cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

// Color change on click
document.addEventListener("click", () => {
  cursorDot.style.backgroundColor = "#ff0066";
  setTimeout(() => {
    cursorDot.style.backgroundColor = "#00ffcc";
  }, 200);
});



let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  document.querySelector('.carousel-track').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(moveToNextSlide, 3000); // Change every 3 seconds

// Optional: swipe support for touch devices
let startX = 0;
const track = document.querySelector('.carousel-track');

track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) moveToNextSlide(); // Swipe left
  else if (endX - startX > 50) {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});

