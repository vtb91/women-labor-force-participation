$(function () {
	$('#container').highcharts({
		chart: {
			renderTo: 'container',
			defaultSeriesType: 'line',
			marginTop: 120
		},
		title: {
			text: 'Labor force participation rate of women <br> ages 25-54 in selected industrial economies since 2000'
		},
		legend: {
			enabled: false
		},
		tooltip: {
			formatter: function () {
				return this.series.name + ' ' + this.y;
			}
		},
		xAxis: {
			opposite: true,
			lineColor: '#999',
			categories: ['2000', '2016'],
			title: {
				text: ''
			},
			labels: {
				style: {
					fontWeight: 'bold'
				}
			}
		},
		yAxis: {
			gridLineWidth: 0,
			labels: {
				enabled: false,
			},
			title: {
				text: '',
			}
		},
		plotOptions: {
			line: {
				lineWidth: 2,
				shadow: false,
				color: '#666',
				marker: {
					radius: 2,
					symbol: 'circle'
				},
				dataLabels: {
					enabled: true,
					align: 'left',
					x: 10,
					y: 0,
					formatter: function () {
						if (this.x == 2016) {
							return this.series.name + ' ' + this.y;
						}
					}
				}
			},
			scatter: {
				shadow: false,
				color: '#666',
				marker: {
					radius: 2
				},
				dataLabels: {
					enabled: true,
					align: 'right',
					x: -10,
					y: 0,
					formatter: function () {
						return this.point.name + ' ' + this.y;
					}
				}
			}
		},
		series: [{
			name: 'Sweden',
			data: [79.0, 82.1]
    }, {
			name: 'Great Britain',
			data: [76.4, 78.2]
    }, {
			name: 'United States',
			data: [77.2, 73.0]
     }, {
			name: 'Japan',
			data: [72.5, 76.9]
     }, {
			name: 'Germany',
			data: [71.1, 78.0]
     }, {
			name: 'France',
			data: [68.0, 71.7]
     }, {
			type: 'scatter',
			data: [{ 'x': 0, 'y': 79.0, 'name': 'Sweden' },
				{ 'x': 0, 'y': 76.4, 'name': 'Great Britain' },
				{ 'x': 0, 'y': 77.2, 'name': 'United States' },
				{ 'x': 0, 'y': 72.5, 'name': 'Japan' },
				{ 'x': 0, 'y': 71.1, 'name': 'Germany' },
				{ 'x': 0, 'y': 68.0, 'name': 'France' }, ]
      }]
	});
});

Highcharts.chart('line-graph', {
	chart: {
		type: 'line'
	},
	title: {
		text: 'Womens Labor Force Participation<br> Rate in the US since 1970'
	},
	subtitle: {
		text: 'Source: Bureau of Labor Statistics'
	},
	xAxis: {
		categories: ['1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015']
	},
	yAxis: {
		title: {
			text: 'Percent (%)'
		}
	},
	plotOptions: {
		line: {
			dataLabels: {
				enabled: true
			},
			enableMouseTracking: false
		}
	},
	series: [{
		name: 'Annual Average Rate',
		data: [43.4, 46.4, 51.5, 54.5, 57.5, 59.0, 59.9, 59.2, 58.6, 56.7]
    }, ]
});