$(function() {
  
      var topBtn = $('#tophe');
  
      topBtn.hide();
  
      $(window).scroll(function () {
  
          if($(this).scrollTop() > 200) {
  
              topBtn.fadeIn();
  
          } else {
  
              topBtn.fadeOut();
  
          }
  
      });
  
      topBtn.click(function () {
  
          $('body,html').animate({
  
              scrollTop: 0
  
          }, 500);
  
          return false;
  
      });
  
  });

  $(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});
  
