$(document).ready(function(){
  $('.btn-navigation').click(function(){
    $(this).find('.barre').toggleClass('white');
    $('nav').toggleClass('isOpen');
  });
});
/*=====================*/
/*   TOGGLE BISTROT  & MAP (Iframe)  */
/*=====================*/
$(document).ready(function(){
  $('#mainbistrot').hide();
  $('iframe').hide();
});
  $(function(){
    $('#boutonbistrot').click(function(){
      $('#mainbistrot').toggle('blind');
    });
    $('.rue_footer').click(function(){
      $('iframe').toggle('clip', 'slow');
      return false;
    });
  });
  /*========================*/
  /*   FERMETURE BISTROT    */
  /*========================*/
$(function(){
  $('#fermer').click(function(){
    $('#mainbistrot').hide('blind');
  });
});
