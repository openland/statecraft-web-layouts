$(document).ready(function () {

	$('a[href="#"]').on({
		click: function (e) {
				e.preventDefault();

				console.log('Click on a[href=#]');
			}
	});

});