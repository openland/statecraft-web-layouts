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

});