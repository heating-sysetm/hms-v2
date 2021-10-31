import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-column-rotated-three',
  templateUrl: './column-rotated-three.component.html',
  styleUrls: ['./column-rotated-three.component.scss']
})
export class ColumnRotatedThreeComponent implements OnInit {
    data:any;
    title:any='';
    option: any;
    showChart=false;
    id:any='';
    chart: any;
    timezone = new Date().getTimezoneOffset();
  constructor() { }

  ngOnInit(): void {
      if (this.showChart) {
        setTimeout(() => {
            Highcharts.setOptions({
                lang: {
                  resetZoom: "ریست"
                },
              });
            if (this.data) {
              this.option.chart.renderTo = String(this.id);
              this.chart = new Highcharts.Chart(this.option);
            }
          }, 50);
      }
  }

  @Input('data')
  public set items(items: any) {
    this.data = items.data;
    this.title=items.title;
    this.id=items.id;
    this.option={
        chart: {
            zoomType: 'x'
        },
        title: {
            text: this.title
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'درصد '
            }
        },
        legend: {
            enabled: false
        },

        plotOptions: {
            area: {
                
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
    
        series: [
        {
            type: 'area',
            name: '٪',
            data: this.data,
            color: '#ff5c5c'
        }]
    }
    this.showChart=true;
    
  }




}
