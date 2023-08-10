let winY = window.scrollY;
let height = 0;
let images = document.querySelectorAll('.images');

window.addEventListener('scroll', () => {
  winY = window.scrollY; // Update position
  if (winY > 100) height += 25; // increase value
  images.forEach(item => { item.style.transform = `translateY(${height}px)`; }); // Use translate instead of transformY
});
