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

  //указать класс дива, в котором расположены дивы с изображениями
    // вторым аргументом указать див. где непосредственно лежит картнка
    function centeredImg(pluginClass, div){
      var pluginCentered = document.getElementsByClassName(pluginClass);
      console.log(pluginCentered);
      var div = pluginCentered[0].getElementsByClassName(div);
      console.log(div);
      var img = pluginCentered[0].getElementsByTagName("img");
      console.log(img);
      for(var i=0; i<img.length; i++){
        img[i].style.left = ""+ -(img[i].clientWidth-div[0].clientWidth)/2 +"px";
        img[i].style.top = ""+ -(img[i].clientHeight-div[0].clientHeight)/2 +"px";
        console.log(img[i].style.left);
        console.log(img[i].style.top);
      }
    }
    //centeredImg("pluginCentered", "b-news-item__img");

});
