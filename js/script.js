$(function() {

  if(window.matchMedia('(min-width: 769px)').matches){

    $('.js-main-visual').slick({ 
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      allows: true,
    });

    $('.main-visual').slick({ 
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      fade: true,
      cssEase: 'linear',
      speed: 1000,
    });

    
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.js-fadein').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
      $('.js-delay').each(function(){
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(function(){
            $('.js-delay').each(function(i){
                $(this).delay(i * 200).queue(function(){
                    $(this).addClass('is-fadein');
                });
            });
          });
        }
      });
    });

    $('.view').hover(
      function(){
        $(this).fadeTo('fast',0.7);
      },
      function(){
        $(this).fadeTo('fast',1.0);
      }
    );

} else {

  $('.js-main-visual').slick({ 
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    allows: true,
  });

  $('.main-visual').slick({ 
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    speed: 1000,
  });

  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.js-fadein').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
    $('.js-delay').each(function(){
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(function(){
          $('.js-delay').each(function(i){
              $(this).delay(i * 200).queue(function(){
                  $(this).addClass('is-fadein');
              });
          });
        });
      }
    });
  });

  $('.view').hover(
    function(){
      $(this).fadeTo('fast',0.7);
    },
    function(){
      $(this).fadeTo('fast',1.0);
    }
  );


}});
