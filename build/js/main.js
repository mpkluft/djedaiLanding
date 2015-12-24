/*
 * Third party
 */
//= ../../bower_components/html5shiv/dist/html5shiv.js
//= ../../bower_components/jquery/dist/jquery.js

/*
 * Custom
 */
//= partials/app.js
$(function(){
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

 $(".owl-carousel").owlCarousel({
 	    items : 1,
		autoplay : true,
		dots : true,
		dotData : true,
		loop : true,
  });

 //$('.main-section-item').equalHeight();

});
