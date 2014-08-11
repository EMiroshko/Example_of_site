jQuery(document).ready(function($) {
 
 $(".scroll").click(function(event){  
  event.preventDefault();
  var link = $(this.hash);
  var clicked_on = $(this);
  var scrollToPosition = link.offset().top + parseInt(link.closest(".page").prev().css("margin-top"));
  $('html,body').animate({scrollTop:scrollToPosition}, 500, function() {
location.hash = clicked_on[0].hash;
  });
 });
});