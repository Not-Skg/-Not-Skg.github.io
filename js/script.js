$(document).ready(function() {
  $('.accordion-header').click(function() {
    $(this).parent().toggleClass('active');
  });
});
