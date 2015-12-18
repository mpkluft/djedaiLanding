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


 //$('.main-section-item').equalHeight();

});
