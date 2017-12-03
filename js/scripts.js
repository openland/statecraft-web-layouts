$(document).ready(function () {

	$('a[href="#"]').on({
		click: function (e) {
				e.preventDefault();

				console.log('Click on a[href=#]');
			}
	});

	$('.st-side--toggler').on('click', function (e) {
		e.preventDefault();

		$(this).toggleClass('is-active');
		$('.st-side, .st-page--box').toggleClass('is-shown');
	});

	$('.st-page--masonry').masonry({
		itemSelector: '.st-page--col'
	});

	$('.x-card--toggler').on('click', function (e) {
		e.preventDefault();

		var card = $(this).closest('.x-card');
		var label = $(this).attr('data-label');

		$(this).attr('data-label', $(this).html());
		$(this).html(label);

		card.find('.x-card--details').slideToggle(200);
	});

	$('.x-notify').on('click', function (e) {
		e.preventDefault();

		$(this).slideToggle(200, function () {
			$(this).remove();
		})
	});

});