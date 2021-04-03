// BX SLIDER
$(document).ready(function () {
    $('.main-vis').bxSlider({
        mode: 'fade',
        auto: true,
        controls: false
    }); // /bxslider
}); // END /function document ready

// NAVIGATION
    $('.btn').on('click', function () {
        $('.btn').toggleClass('upside');
        $('nav').slideToggle('');
    }); // /navigation

//TOP BTN
let topBtn = $('.page-top');
topBtn.hide();
 
 $(window).on('scroll',function(){
  if($(this).scrollTop() > 300) { 
   topBtn.fadeIn();
       } else {
   topBtn.fadeOut();
       }
}); // /top btn fade-in/out function

topBtn.on('click',function(){
 $('html,body').animate({scrollTop: 0},'swing');
 }); //back to top function
