// Scroll to top logic
const topBtn = document.getElementById("scrollToTopBtn");
window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// GSAP animations
gsap.to(".hero-title", { duration: 1.2, y: 0, opacity: 1, ease: "power4.out", delay: 0.3 });
gsap.to(".hero-subtitle", { duration: 1.2, y: 0, opacity: 1, ease: "power4.out", delay: 0.6 });

// THREE.js Donut
const canvas = document.getElementById("donutCanvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.TorusGeometry(2.5, 1, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff69b4, metalness: 0.5, roughness: 0.3 });
const donut = new THREE.Mesh(geometry, material);
scene.add(donut);

const light = new THREE.PointLight(0xffffff, 2);
light.position.set(10, 10, 10);
scene.add(light);

camera.position.z = 8;

function animate() {
  requestAnimationFrame(animate);
  donut.rotation.x += 0.01;
  donut.rotation.y += 0.02;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});



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
