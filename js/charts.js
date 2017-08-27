$(document).ready(function () {

	var chartDatas = [{
			labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
			datasets: [
				{ label: 'Total completed', data: [10, 30, 20, 70, 60, 70, 70, 60, 60], backgroundColor: '#34b5ff', borderColor: '#34b5ff', fill: false, lineTension: 0 },
				{ label: 'Affordable completed', data: [10, 40, 40, 50, 70, 40, 50, 60, 50], backgroundColor: '#535de8', borderColor: '#535de8', fill: false, lineTension: 0 },
				{ label: 'Total in-construction', data: [10, 40, 40, 50, 70, 40, 50, 60, 50], backgroundColor: '#ff5c54', borderColor: '#ff5c54', fill: false, lineTension: 0 },
				{ label: 'Affordable in-construction', data: [60, 50, 10, 30, 80, 50, 40, 30, 70], backgroundColor: '#ffc334', borderColor: '#ffc334', fill: false, lineTension: 0 }
			]
		}, {
			labels: ['Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015', 'Q1 2016', 'Q2 2016', 'Q3 2016', 'Q4 2016'],
			datasets: [
				{ label: 'Completed', data: [90, 70, 105, 60, 75, 90, 105, 60], backgroundColor: '#34b5ff', borderColor: '#34b5ff', fill: false, lineTension: 0 },
				{ label: 'In construction', data: [70, 63, 77, 35, 85, 70, 77, 35], backgroundColor: '#535de8', borderColor: '#535de8', fill: false, lineTension: 0 }
			]
		}];

	var chartOptions = {
			scales: {
				yAxes: [{ ticks: { beginAtZero: true } }],
				xAxes: [{
					categoryPercentage: 0.6,
					barPercentage: 0.8,
					gridLines: { display: false }
				}]
			},

			responsive: true,
			legend: { display: false },
			tooltips: { enabled: false },
			events: [],

			legendCallback: function (chart) {
				var legendHtml = [];

				for (var i = 0; i < chart.data.datasets.length; i++) {
					legendHtml.push('<div class="st-chart--item"><span style="border-color:' + chart.data.datasets[i].backgroundColor + '"></span>');

					if (chart.data.datasets[i].label)
						legendHtml.push(chart.data.datasets[i].label);

					legendHtml.push('</div>');
				}

				return legendHtml.join("");
			}
		};

	$('.st-chart').each(function (i) {
		var curChart = new Chart($(this).find('canvas')[0].getContext('2d'), {
			type: 'bar',
			data: chartDatas[i],
			options: chartOptions
		});

		$(this).find('.st-chart--legend').html(curChart.generateLegend());
	})

});