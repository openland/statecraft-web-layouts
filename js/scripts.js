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

		$(this).closest('.x-card').toggleClass('is-expanded');
	});

	$('.x-filters--head').on('click', function (e) {
		e.preventDefault();

		$(this).closest('.x-filters').toggleClass('is-shown');
	});

	$('.x-filters--close').on('click', function (e) {
		e.preventDefault();

		$(this).closest('.x-filters').toggleClass('is-shown');
	});

	$('.x-top--open').on('click', function (e) {
		e.preventDefault();

		$(this).closest('.x-top').toggleClass('is-shown');
	});

	$('.x-header--open').on('click', function (e) {
		e.preventDefault();

		$(this).closest('.x-header').toggleClass('is-shown');
	});

	$('.x-notify').on('click', function (e) {
		e.preventDefault();

		$(this).slideToggle(200, function () {
			$(this).remove();
		})
	});

	$('.x-filter--radio').on('click', function (e) {
		e.preventDefault();

		$(this).addClass('is-checked');
		$(this).closest('.x-filter').find('.is-checked').not(this).removeClass('is-checked');
	});

});