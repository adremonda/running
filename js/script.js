$(document).ready(function(){
    
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 250) {
				$('.navbar-fixed').addClass('navbar-fixed-top');
			} else {
				$('.navbar-fixed').removeClass('navbar-fixed-top');
			}
		});

	
	});

});