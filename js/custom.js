$(document).ready(function(){
  $('.btn-navigation').click(function(){
    $(this).find('.barre').toggleClass('white');
    $('nav').toggleClass('isOpen');
  });

  /*=====================*/
  /*   TOGGLE BISTROT  & MAP (Iframe)  */
  /*=====================*/
  $('#mainbistrot').hide();
  $('iframe').hide();

  /*===BISTROT===*/
  $('#boutonbistrot').click(function(){
    $('#mainbistrot').toggle('blind');
  });
  $('#fermer').click(function(){
    $('#mainbistrot').hide('blind');
  });
  /*===Iframe===*/
  $('.rue_footer').click(function(){
    $('iframe').toggle('clip', 'slow');
    return false;
  });

  /*===================*/
  /*  Slider section4  */
  /*===================*/
  setInterval(function(){
     $(".slideshow .ulslider").animate({marginLeft:-1000},800,function(){
        $(this).css({marginLeft:-0}).find("li:last").after($(this).find("li:first"));
     })
  }, 3500);

});
