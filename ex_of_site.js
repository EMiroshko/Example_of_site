jQuery(document).ready(function($) {
 
 $(".scroll").click(function(event){  
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top + parseInt($(this.hash).closest(".page").prev().css("margin-top"))}, 500);
 });
});