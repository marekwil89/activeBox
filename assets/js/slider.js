$( document ).ready(function() {

  $( ".ctrl" ).on( "click", function(e) {
    var slideCtrlIndex = $(".slide-control li").index(this);
    $(".slide-control .ctrl").removeClass("active");
    $(e.target).addClass("active");
    $("figure .slide-img").removeClass("active");
    $(".slide-img").eq(slideCtrlIndex).addClass("active");
    $("blockquote").removeClass("active")
    $("blockquote").eq(slideCtrlIndex).addClass("active")
  });

});