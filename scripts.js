$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash)
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']')
			if (target.length) {
				$('html, body').animate({
			 	scrollTop: target.offset().top
				}, 800)
				return false
			}
		}
	})

	$('#about-link').on('click', function() {
		$('html, body').animate({
		 	scrollTop: $('#about').offset().top
		}, 900)
	})

	$('#portfolio-link').on('click', function() {
		$('html, body').animate({
		 	scrollTop: $('#portfolio').offset().top
		}, 900)
	})

	$('#contact-link').on('click', function() {
		$('html, body').animate({
		 	scrollTop: $('#contact').offset().top
		}, 900)
	})

	$('.tothetop a').on('click', function() {
		$('html, body').animate({
		 	scrollTop: $('#top').offset().top
		}, 900)
	})

	//

	$('.hidden-menu i').on('click', function() {
		$('nav ul').css('top', '0').addClass('bg-overlay')
		$('.hidden-menu').fadeOut()
		$('#about-link, #portfolio-link, #contact-link').on('click', function() {
			$('nav ul').css('top', '-100%').removeClass('bg-overlay')
			$('.hidden-menu').fadeIn()
		})
		$('.fa-times').fadeIn()
	})

	$('ul .fa-times').on('click', function() {
		$('.hidden-menu').fadeIn()
		$('nav ul').css('top', '-100%').removeClass('bg-overlay')
		$('.fa-times').fadeOut()
	})

	$(window).on('resize', function() {
		if ($(window).width() < 650) {
			$('.hidden-menu').show()
			$('nav ul').css('top', '-100%')
		} else {
			$('.hidden-menu').hide()
			$('.fa-times').hide()
			$('nav ul').removeClass('bg-overlay')
		}
	})

	if ($(window).width() < 650) {
		$('.hidden-menu').fadeIn()
	} else {
		$('.hidden-menu').fadeOut()
	}
});