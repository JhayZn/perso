jQuery(document).ready(function($) {

// Home overlays animation //
  $(document).ready(function(){
    $(".homeOverlayLeft").addClass("homeOverlayLeftAnim");
    $(".homeOverlayRight").addClass("homeOverlayRightAnim");
  });

// Fixed menu animation //
  $(window).scroll(function(e) {
    if(window.matchMedia("(min-width: 1201px)").matches){

      var scroll = $(window).scrollTop();

      if (scroll >= 200){
        $(".fixed-menu").addClass("scrolling");
        $(".logo-menu").addClass("logo-menu-color");
        $(".content-menu").addClass("scaleDown");
      } else {
        $(".fixed-menu").removeClass("scrolling");
        $(".logo-menu").removeClass("logo-menu-color");
        $(".content-menu").removeClass("scaleDown");
      }
    }
  });
// Minified menu animation //
// Hamburger icon //
$('.icoHamburger').click(function(e){
  e.preventDefault();
  $this= $(this);
  if($this.hasClass('is-opened')){
    $this.addClass('is-closed').removeClass('is-opened');
  }else{
    $this.removeClass('is-closed').addClass('is-opened');
  }
})
// Show & hide menu //
$('.icoHamburger').click(function(e){
  e.preventDefault();
  $this= $('.minifiedMenu');
  if($this.css('margin-top', '100px')){
    $this.css('margin-top', '-100%');
  }else{
    $this.css('margin-top', '100px');
  }
})
$('.minifiedList a').click(function(e){
  e.preventDefault();
  $this= $('.minifiedMenu');
  if($this.hasClass('showMinified')){
    $this.removeClass('showMinified');
    $this.css("display", "none");
  }else{
    $this.addClass('showMinified');
    $this.css("display", "block");
  }
})
$('.minifiedList a').click(function(e){
  e.preventDefault();
  $('.icoHamburger').addClass('is-closed').removeClass('is-opened');
})
//Page smooth auto scroll //
  var $root = $('html, body');

    $('a').click(function() {

    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
      }, 800, function () {
        window.location.hash = href;
    });
    return false;
  });

// backToTop button display & smooth animation //
  var amountScrolled = 1000;

  $(window).scroll(function() {
  	if ( $(window).scrollTop() > amountScrolled ) {
  		$('.backToTop').fadeIn('slow');
  	} else {
  		$('.backToTop').fadeOut('slow');
  	}
  });
  $('.backToTop').click(function() {

    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
      }, 800, function () {
        window.location.hash = href;
    });
  	return false;
  });
// Legal page text fade on scroll //
  var fadeStart=0 // 100px scroll or less will equiv to 1 opacity
      ,fadeUntil=200 // 200px scroll or more will equiv to 0 opacity
      ,fading = $('.legalTitle')
  ;

  $(window).bind('scroll', function(){
      var offset = $(document).scrollTop()
          ,opacity=0
      ;
      if( offset<=fadeStart ){
          opacity=1;
      }else if( offset<=fadeUntil ){
          opacity=1-offset/fadeUntil;
      }
      fading.css('opacity',opacity).html(opacity);
  });
// Agency page animations //
//Profile Pictures//
  $(window).scroll(function(e) {
  var scroll = $(window).scrollTop();

    if (scroll >= 600){
        $(".picContainerJhayZn").addClass("jhayznPicAnimation");
        $(".picContainerPragma").addClass("pragmaPicAnimation");
    }
  });
// Open & close modal boxes //
// Order modal //
  $('.orderButton').on('touchstart click', function(){
    $('.order-modal-container').css("display", "flex");
    $('.order-modal-container').css("overflow", "auto");
    $('.backToTop').toggleClass("hideOnModal");
    $('html').toggleClass("noScroll");
  });
  $('.btn-closeModal').on('touchstart click', function(){
    $('.order-modal-container').css("display", "none");
    $('.backToTop').removeClass("hideOnModal");
    $('html').removeClass("noScroll");
  });
// Event modal //
  $('.eventButton').on('touchstart click', function(){
    $('.event-modal-container').css("display", "flex");
    $('.event-modal-container').css("overflow", "auto");
    $('html').toggleClass("noScroll");
  });
  $('.btn-closeModal').on('touchstart click', function(){
    $('.event-modal-container').css("display", "none");
    $('html').removeClass("noScroll");
  });
// Other modal //
  $('.otherButton').on('touchstart click', function(){
    $('.other-modal-container').css("display", "flex");
    $('.other-modal-container').css("overflow", "auto");
    $('html').toggleClass("noScroll");
  });
  $('.btn-closeModal').on('touchstart click', function(){
    $('.other-modal-container').css("display", "none");
    $('html').removeClass("noScroll");
  });
});
