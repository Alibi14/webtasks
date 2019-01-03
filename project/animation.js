$(function(){

	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 900);
		return false;
	});

});

var blockMove = anime({
  targets: '#header_objects .el',
  translateX: 250,
  duration: function(el, i, l) {
    return 1500 + (i * 500);
  }
});

document.querySelector ('.header_link.special').onclick = blockMove.restart;
