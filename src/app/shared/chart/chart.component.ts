import { Symbol } from '../symbol/symbol';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare var jQuery:any;

@Component({
    selector: 'my-chart',
	styleUrls: ['./chart.component.scss'],
    template: '<div style="width:60%" id="container"></div>'
})
export class ChartComponent implements OnInit {
	private symbol: any;

    ngOnInit() {}

    ngAfterViewInit(loadedSymbol: any) {
		this.symbol = loadedSymbol;
    	this.renderChart();
    }

	private getArrayfromPrices(prices: Array<Object>): any[] {
		var arr: any[] = [];

		for (let i = 0; i < prices.length; i++) {
			let price: Object = prices[i];
			let item: any[] = [];

			for (let key in price) {
				key === 'date' ? item.push(new Date(price[key]).getTime()) : item.push(price[key]);
			}
			arr.push(item)
		}

		return arr;
	}
 
    renderChart() {
		var data: any = [];
		var self = this;

		data.push({
			type: 'area',
			name: this.symbol.name,
			data: this.getArrayfromPrices(this.symbol.prices)
		});
    	jQuery('#graphContainer').highcharts({
	         chart: {
				zoomType: 'x',
				height: 300
			},
			legend: {
				enabled: false
			},
	        title: {
	            text: null
	        },
	        xAxis: {
				type: 'datetime'
			},
	        yAxis: {
	            title: {
	                text: 'Precio'
	            },
	            labels: {
	                formatter: function () {
	                    return this.value / 1000 + self.symbol.currency.symbol;
	                }
	            }
	        },
	        tooltip: {
	            pointFormat: '<b>{point.y:,.3f}' + self.symbol.currency.symbol
	        },
	        plotOptions: {
	            area: {
					color: self.symbol.currency.color,
					marker: {
						radius: 2
					},
					lineWidth: 1,
					states: {
						hover: {
							lineWidth: 1
						}
					},
					threshold: null
				}
	        },
	        series: data
	    });
    }
}