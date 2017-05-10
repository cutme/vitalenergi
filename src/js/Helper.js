(function(window, document, $, ve, undefined) {
	'use strict';

	var Helper = function() {
        return {
        	exist: exist,
        	blazy: blazy,
        	mobileMenu: mobileMenu,
        	nSelect: nSelect
        };
    };

	function exist(o) {
		return ($(o).length > 0) ? true : false;
	}
	
	function blazy() {

		var bLazy = new Blazy({			
			success: function(element){
			    setTimeout(function(){					
					var parent = element.parentNode.parentNode;
					parent.className = parent.className.replace(/\bis-hidden\b/,'');
			    }, 200);
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
	
	ve.helper = new Helper();

}(window, document, jQuery, window.ve = window.ve || {}));