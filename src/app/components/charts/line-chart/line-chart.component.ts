import { DataShareService } from 'src/app/services/data-share.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  inputs: [`changed`],
})
export class LineChartComponent implements OnInit {
  options: any = {
    chart: {
      type: 'spline',
      // animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
    },

    time: {
      useUTC: false,
    },

    title: {
      text: 'درصد گازهای قابل اشتعال',
    },

    accessibility: {
      announceNewData: {
        enabled: true,
        minAnnounceInterval: 15000,
        announcementFormatter: function (allSeries, newSeries, newPoint) {
          if (newPoint) {
            return 'New point added. Value: ' + newPoint.y;
          }
          return false;
        },
      },
    },

    xAxis: {
      type: 'datetime',
      ShowFirstLabel:false,
    },

    yAxis: {
      title: {
        text: 'درصد',
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: '#808080',
        },
      ],
    },

    tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}',
    },

    legend: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },

    series: [
      {
        name: 'گازهای قابل اشتعال',
        data: (function () {
          // generate an array of random data
          var data = [],
            time = new Date().getTime(),
            i;

          for (i = -15; i <= 0; i += 1) {
            data.push({
              x: time + i * 1500,
              y: 0,
            });
          }
          return data;
        }()),
      },
    ],
  };
  chart: any;
  constructor(private dataService: DataShareService) {}

  ngOnInit(): void {
    this.chart = Highcharts.chart('container-line', this.options);
  }

  ngOnChanges(changes: SimpleChanges) {
      if (this.chart) {
        let series = this.chart.series[0];
        this.dataService.gasData.subscribe((newVal) => {
          let x = new Date().getTime(),
            y = Number(newVal);
            // console.log(x);
            
          series.addPoint([x, y], true, true);
        });
      }

      // setTimeout(() => {
      //   let series = this.chart.series[0];
      //   let x = new Date().getTime(),
      //       y = 15;
      //     series.addPoint([x, y], true, true);
      // }, 4000);
  }
}
