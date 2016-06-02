$(function() {

	var glide = $('.slider').glide().data('api_glide');
	$(window).on('keyup', function (key) {
		if (key.keyCode === 13) {
			glide.jump(3, console.log('Wooo!'));
		};
	});

	$('.slider-arrow').on('click', function() {
		console.log(glide.current());
	});

	$('.slider').glide({
		arrows: false,
		autoplay: 5000
	});

	$('.all_tags').click(function (b) {
		b.preventDefault();
		$('.tags').css('height','auto');
		$(this).hide();
		$('.hide_tags').show();	
	});

	$('.hide_tags').click(function (b) {
		b.preventDefault();
		$('.tags').css('height','50px');
		$(this).hide();
		$('.all_tags').show();
	})

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

});