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
    //Slider d'images Section 4
    $(function(){
      setInterval(function(){
         $(".slideshow .ulslider").animate({marginLeft:-1000},800,function(){
            $(this).css({marginLeft:-0}).find("li:last").after($(this).find("li:first"));
         })
      }, 3500);
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
