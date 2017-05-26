(function(window, document, $, ve, undefined) {
	'use strict';

	var Helper = function() {
        return {
        	exist: exist,
        	blazy: blazy,
        	isInView: isInView,
        	mobileMenu: mobileMenu,
        	nSelect: nSelect,
        	showOnScroll: showOnScroll
        };
    };

	function exist(o) {
		return ($(o).length > 0) ? true : false;
	}
	
	function blazy() {

		var bLazy = new Blazy({
			breakpoints: false,	
			success: function(element){
			    setTimeout(function(){					
					var parent = element.parentNode.parentNode;
					parent.className = parent.className.replace(/\bis-hidden\b/,'');
					parent.className = parent.className.replace(/\bis-hidden\b/,'');
					parent.parentNode.parentNode.parentNode.parentNode.className = parent.parentNode.parentNode.parentNode.parentNode.className.replace(/\bis-hidden\b/,'');
			    }, 200);
	        }
	   });
	}
	
	function isInView() {
		var bottomOfWindow = $(window).scrollTop() + $(window).height();
		
		$('.anim').each(function() {
			if ( $(this).offset().top < bottomOfWindow ) {
				$(this).addClass('anim--done');
			}
		});
	}

	function mobileMenu() {
		$("#menu").mmenu({
           "extensions": [
              "pagedim-black"
           ],
           "offCanvas": {
              "position": "right"
           }
        });
	}
	
	function nSelect() {
		$('.nice-select').niceSelect();
	}
	
	function showOnScroll() {
    	var body = $(window);

/*
		body = ( $(window).width() > 1024 ) ? $('#container') : $(window);

    	body.on('resize', function() {
    		body = ( $(window).width() > 1024 ) ? $('#container') : $(window);
    	});
*/
		
		body.on('scroll', function() {		
	        $('.anim').each( function(){
				var bottomOfObject = $(this).offset().top,
		          	bottomOfWindow = $(window).scrollTop() + $(window).height();
	
				if( bottomOfWindow > bottomOfObject ) {
					$(this).addClass('anim--done');
				}
			});
		});
    }
	
	ve.helper = new Helper();

}(window, document, jQuery, window.ve = window.ve || {}));