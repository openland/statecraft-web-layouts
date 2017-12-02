$(document).ready(function () {

	$('a[href="#"]').on({
		click: function (e) {
				e.preventDefault();

				console.log('Click on a[href=#]');
			}
	});

	$('.sf-card--toggler').on('click', function (e) {
		e.preventDefault();

		var card = $(this).closest('.sf-card');
		var label = $(this).attr('data-label');

		$(this).attr('data-label', $(this).html());
		$(this).html(label);

		card.find('.sf-card--details').slideToggle(200);
	});

	$('.sf-notify').on('click', function (e) {
		e.preventDefault();

		$(this).slideToggle(200, function () {
			$(this).remove();
		})
	});

});