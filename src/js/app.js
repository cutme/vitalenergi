/*jshint expr:true */


(function(window, document, $, ve, undefined) {

	'use strict';

	ve.helper.blazy();

	$(document).ready(function() {
		ve.helper.exist('#menu') && ve.helper.mobileMenu();
		ve.helper.exist('.nice-select') && ve.helper.nSelect();
		
		
		
		
		ve.helper.showOnScroll();
		
	});
	
	
	$(window).on('load', function() {
		ve.helper.isInView();
	});


		
}(window, document, jQuery, window.ve = window.ve || {}));
