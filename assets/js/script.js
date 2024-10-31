(function ($) {

	"use strict"

	$('#mymail-cf7-settings')
		.on('click', '.cf7-mymail-add-field', function (event) {
			event.preventDefault();

			$('#mymail-map').find('li').last().clone().appendTo('#mymail-map').find('select').val(0).parent().find('input').focus().select();

		})
		.on('click', '.cf7-mymail-remove-field', function (event) {
			event.preventDefault();

			if ($('#mymail-map').find('li').length > 1)
				$(this).parent().remove();

		});

})(jQuery);