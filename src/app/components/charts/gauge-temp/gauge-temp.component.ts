import { DataShareService } from './../../../services/data-share.service';
declare var require: any;
import { Component, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts';
const HighchartsMore = require('highcharts/highcharts-more.src');
HighchartsMore(Highcharts);
const HC_solid_gauge = require('highcharts/modules/solid-gauge.src');
HC_solid_gauge(Highcharts);
@Component({
  selector: 'app-gauge-temp',
  templateUrl: './gauge-temp.component.html',
  styleUrls: ['./gauge-temp.component.scss'],
  inputs: [`changed`],
})
export class GaugeTempComponent implements OnInit {

  option:any={

    chart: {
        type: 'solidgauge',
        height: '110%',

    },

    title: {
        text: '',
        style: {
            fontSize: '24px'
        }
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px',
            color: '#fff'
        },
        valueSuffix: '%',
        pointFormat: '<span style="font-size:2.5em; color: {point.color}; font-weight: bold">{point.y}</span><br><span>{series.name}</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2+5,
                y: (this.chart.plotHeight / 3)+55
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[4])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'دما',
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: 80
        }]
    }, {
        name: 'رطوبت',
        data: [{
            color: Highcharts.getOptions().colors[4],
            radius: '87%',
            innerRadius: '63%',
            y: 65
        }]
    }]
}
chart:any;
  chartSpeed: any;
  constructor(private dataService: DataShareService) {}

  ngOnInit(): void {
    this.option.chart.renderTo = 'gauge-container';
    this.chartSpeed = new Highcharts.Chart(this.option);
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chartSpeed) {
        // console.log(this.chartSpeed.series);
        
      var point = this.chartSpeed.series[0].points[0];
      this.dataService.outData.subscribe((newVal) => {
          console.log(point);
          
        point.update(Number(newVal));
      });
      var point2 = this.chartSpeed.series[1].points[0];
      this.dataService.outHData.subscribe((newVal) => {
        point2.update(Number(newVal));
      });
    }
  }

}
