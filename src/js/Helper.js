(function(window, document, $, ve, undefined) {
	'use strict';

	var Helper = function() {
        return {
        	exist: exist,
        	blazy: blazy,
        	nSelect: nSelect
        };
    };

	function exist(o) {
		return ($(o).length > 0) ? true : false;
	}
	
	function blazy() {

		var bLazy = new Blazy({
			
			breakpoints: [{
			    width: 420, 
			    src: 'data-src-small'
			}], 
			
			success: function(element){
			    setTimeout(function(){					
					var parent = element.parentNode.parentNode;
					parent.className = parent.className.replace(/\bis-hidden\b/,'');
			    }, 200);
	        }
	   });
	}
	
	function nSelect() {
		$('.nice-select').niceSelect();
	}
	
	ve.helper = new Helper();

}(window, document, jQuery, window.ve = window.ve || {}));