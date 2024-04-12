document.querySelectorAll('.header').forEach(function(header) {
  header.addEventListener('click', function() {
    this.parentNode.classList.toggle('open');
  });
});
