const points = document.querySelectorAll('.point');
const textContainer = document.querySelector('.text-container');

points.forEach(point => {
  point.addEventListener('mouseover', () => {
    const text = point.getAttribute('data-text');
    textContainer.textContent = text;
  });
});
