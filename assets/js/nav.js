$( document ).ready(function() {
  anchorScroll();
  resizeNav();

  $('.fa-bars').on( "click", toggleMenu);
  $('.fa-times').on( "click", toggleMenu);

  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    resizeNav(wScroll)
  });

  function toggleMenu(){
    $('.menu').toggleClass('opened')
  }

  function resizeNav(wScroll){
    if(wScroll > 0){
      $('nav').addClass('resize')
    }
    else{
      $('nav').removeClass('resize')
    }
  }

  function anchorScroll(){
    $('a[href*="#"]:not([href="#"])').click(function(){
    if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
      var target=$(this.hash);
      
      target = target.length ? target:$('[name='+this.hash.slice(1)+']');
      
      if(target.length){$('html, body').animate({
        scrollTop:target.offset().top - 60
      },1000);

        return false;
      }}
    });
  }

});