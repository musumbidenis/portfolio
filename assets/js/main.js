jQuery(window).on('load', function () {

	// HIDE PRELAODER
	$(".preloader").addClass("hide-preloader");

});


jQuery(document).ready(function ($) {
	"use strict";

	// PORTFOLIO GALLERY 
	$('.portfolio a').featherlightGallery({
		previousIcon: '&#9664;',
		nextIcon: '&#9654;',
		galleryFadeIn: 100,
		galleryFadeOut: 300
	});

});

$('.mu-menu-btn').on('click', function(event) {
	   
	event.preventDefault();
	
	$('.mu-menu-full-overlay').addClass('mu-menu-full-overlay-show');
   
});

// when click colose btn

$('.mu-menu-close-btn').on('click', function(event) {
	
	event.preventDefault();
	
	$('.mu-menu-full-overlay').removeClass('mu-menu-full-overlay-show');
	
});