// протестируем данную функцию
function isEven(val) {
	return val % 2 === 0;
}

if(!Modernizr.svg) {
	alert("Hello");
	$("img[src*='svg']").attr("src", function() {
		return $(this).attr("src").replace(".svg", ".png");
	});
};