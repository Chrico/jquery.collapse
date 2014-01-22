/**
 * collapse
 * @author Christian Brückner
*/
(function($){

	"use strict"; // jshint x_X

	$.fn.collapse = function(options){

		var defaultoptionsions = {
			'attrHide'		: { 'aria-expanded' : false, 'aria-hidden': 'true' }
			,'attrShow'		: { 'aria-expanded' : true, 'aria-hidden': 'false' }
			,'classHide'	: 'collapse-hideme'
			,'classShow'	: 'collapse-showme'
			,'sourceClass'	: 'collapse-header'
			,'targetClass'	: 'collapse-content'
			,'fxSpeed'		: 'normal'
			},
			options = $.extend(
				options,
				defaultoptionsions
			)
		;

		$( this ).each( function( i ) {

			var elem = $( this ),
				elemTarget = elem.find('.' + options['targetClass']),
				id = elemTarget.attr( 'id' ) || 'cc_' + i
				;

			elemTarget.addClass( options['classHide'] ).attr(
				$.extend(
					{'id' : id}
					,options['attrHide']
				)
			);

			elem
				.attr( { 'aria-controls' : id } )
				.bind( 'click', function( e ){
					// binding events for selecting
					// showing submenu
					if( elemTarget.hasClass( options['classHide']) ){

						elemTarget
							.slideDown( options['fxSpeed'] )
							.removeClass( options['classHide'] )
							.addClass( options['classShow'] )
							.attr( options['attrShow'] )
						;
					}
					else{

						elemTarget
							.slideUp( options['fxSpeed'] )
							.removeClass( options['classShow'] )
							.addClass( options['classHide'] )
							.attr( options['attrHide'] )
						;
					}
					e.preventDefault();
				})
			;

		});

	};

})(jQuery);