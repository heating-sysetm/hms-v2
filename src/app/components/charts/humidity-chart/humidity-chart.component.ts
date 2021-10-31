import { DataShareService } from 'src/app/services/data-share.service';
declare var require: any;
import { Component, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts';
const HighchartsMore = require('highcharts/highcharts-more.src');
HighchartsMore(Highcharts);
const HC_solid_gauge = require('highcharts/modules/solid-gauge.src');
HC_solid_gauge(Highcharts);

@Component({
  selector: 'app-humidity-chart',
  templateUrl: './humidity-chart.component.html',
  styleUrls: ['./humidity-chart.component.scss'],
  inputs:['changed']
})
export class HumidityChartComponent implements OnInit {
  option: any = {
    chart: {
      type: 'solidgauge',
      height: '100%',
      plotBackgroundColor: '#303030',
    },

    title: {
      text: '',
      style: {
        fontSize: '24px',
      },
    },

    tooltip: { enabled: false },

    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [
        {
          // Track for Move
          outerRadius: '112%',
          innerRadius: '88%',
          backgroundColor: Highcharts.color(Highcharts.getOptions().colors[8])
            .setOpacity(0.3)
            .get(),
          borderWidth: 0,
        },
      ],
    },

    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: [],
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false,
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: true,
      },
    },

    series: [
      {
        name: 'Move',
        data: [
          {
            color: Highcharts.getOptions().colors[8],
            radius: '112%',
            innerRadius: '88%',
            y: 60,
          },
        ],
      },
    ],
  };
  chart: any;
  visibleValue: number = 0;

  constructor(private dataService: DataShareService) {
  }

  ngOnInit(): void {
    this.option.chart.renderTo = 'container-humidity';
    this.chart = new Highcharts.Chart(this.option);
  }

  ngOnChanges(changes: SimpleChanges){ 
    if(this.chart){
        var point = this.chart.series[0].points[0];
        this.dataService.cisternData.subscribe((newVal) => {
          point.update(Number(newVal));
          this.visibleValue = newVal;
        });
      }
  }

}
