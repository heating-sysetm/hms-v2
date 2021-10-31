import { DataShareService } from 'src/app/services/data-share.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HCSoldGauge from 'highcharts/modules/solid-gauge';
import * as ChartModuleMore from 'highcharts/highcharts-more.js';
@Component({
  selector: 'app-solid-gauge',
  templateUrl: './solid-gauge.component.html',
  styleUrls: ['./solid-gauge.component.scss'],
  inputs: [`changed`],
})
export class SolidGaugeComponent implements OnInit {
  option: any = {
    yAxis: {
      min: 0,
      max: 100,
    },

    credits: {
      enabled: false,
    },

    series: [
      {
        name: 'temp',
        data: [32],
        dataLabels: {
          format:
            '<div style="text-align:center">' +
            '<span class="temp" style="color: var(--foreground-light);font-size:36px">{y}</span><br/>' +
            // '<span class="temp-desc" style="color: var(--foreground-white);font-size:16px;opacity:0.4">دمای مخزن</span>' +
            '</div>',
        },
        tooltip: {
          valueSuffix: ' سانتی گراد',
        },
      },
    ],
  };
  chartSpeed: any;
  gaugeOptions: any = {
    chart: {
      type: 'solidgauge',
    },

    title: null,

    pane: {
      center: ['50%', '85%'],
      size: '100%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#fcc',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc',
      },
    },

    exporting: {
      enabled: false,
    },

    tooltip: {
      enabled: false,
    },

    // the value axis
    yAxis: {
      stops: [
        [0.1, '#22e0d1'], // blue
        [0.5, '#ff9900'], // yellow
        [0.9, '#d14200'], // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      title: {
        y: -70,
      },
      labels: {
        y: 16,
      },
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
  };
  constructor(private dataService: DataShareService) {}

  ngOnInit(): void {
    ChartModuleMore.Highcharts;
    HCSoldGauge(Highcharts);
    this.chartSpeed = Highcharts.chart(
      'container-speed',
      Highcharts.merge(this.gaugeOptions, this.option)
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chartSpeed) {
      var point = this.chartSpeed.series[0].points[0];
      this.dataService.cisternData.subscribe((newVal) => {
        point.update(Number(newVal));
      });
    }    
  }
}
