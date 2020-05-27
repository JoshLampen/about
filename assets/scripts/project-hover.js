$(document).ready(function() {
  $(document).on('mouseenter', '.project-container', function() {
    const $staticP = $(this).find('.p-static');
    const $hoverP = $(this).find('.p-hover');
    
    $staticP.css('color', 'white');
    $hoverP.css('color', 'yellow');
  });
  
  $(document).on('mouseleave', '.project-container', function() {
    const $staticP = $(this).find('.p-static');
    const $hoverP = $(this).find('.p-hover');

    $staticP.css('color', 'grey');
    $hoverP.css('color', '#222222');
  });
});