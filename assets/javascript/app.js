$(document).ready(function(){
	$('#nav-icon').click(function(){
    $('body').toggleClass('noScroll');
    $(this).toggleClass('open');
    $("#menu").toggleClass('active');
});
    
  
    
if ($(window).width() < 768) { 
    
    $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('#nav-icon').toggleClass('open');
        $("#menu").toggleClass('active');
        $('.container').removeClass('activePage');
        $('body').removeClass('noScroll');
        target.toggleClass('activePage');
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1400);
        return false;
      }
    }
  }); 
});
} else {
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('#nav-icon').toggleClass('open');
        $("#menu").toggleClass('active');
        $('.container').removeClass('activePage');
        $('body').removeClass('noScroll');
        target.toggleClass('activePage');
        return false;
      }
    }
  });
});
}
});