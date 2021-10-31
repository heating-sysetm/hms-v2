import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-line-rotated',
  templateUrl: './line-rotated.component.html',
  styleUrls: ['./line-rotated.component.scss']
})
export class LineRotatedComponent implements OnInit {
  option:any={
    chart: {
        type: 'line'
    },
    title: {
        text: 'میانگین گاز کربن دی اکسید و کربن مونو اکسید'
    },
    xAxis: {
        categories: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهار شنبه', 'پنج شنبه', 'جمعه']
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
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
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, ]
    }, {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0],
        color: '#FF0000'
    }]
}
  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('line-rotated',this.option );
  }

}
