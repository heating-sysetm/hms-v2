import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-column-rotated',
  templateUrl: './column-rotated.component.html',
  styleUrls: ['./column-rotated.component.scss']
})
export class ColumnRotatedComponent implements OnInit {

    data:any;
    title:any='';
    option: any;
    showChart=false;
    id:any='';
    chart: any;
  constructor() { }

  ngOnInit(): void {
      if (this.data.length>0) {
        setTimeout(() => {
            Highcharts.setOptions({
                lang: {
                  resetZoom: "ریست"
                }
              });
              this.option.chart.renderTo = String(this.id);
              this.chart = new Highcharts.Chart(this.option);
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
                text: '(دما (سانتی گراد'
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
            name: '°C',
            data: this.data,
            color: '#539ffd'
        }]
    }
    
    
  }

}
