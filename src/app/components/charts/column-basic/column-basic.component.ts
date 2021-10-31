import { DataShareService } from 'src/app/services/data-share.service';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column-basic',
  templateUrl: './column-basic.component.html',
  styleUrls: ['./column-basic.component.scss']
})
export class ColumnBasicComponent implements OnInit {
  public options: any={};

  constructor(private api:ApiService,private datashare:DataShareService) { }

  ngOnInit(): void {
    Highcharts.setOptions({
        lang: {
          resetZoom: "ریست"
        }
      });

      this.datashare.isChanged.subscribe(res=>{
        this.loadChart();
       });
    
  }
  
   loadChart(){
    this.api.getInOutValues(this.datashare.start_time.value,this.datashare.end_time.value).subscribe(result=>{
        var temp_data=result['data'].data1;
        var temp_data2=result['data'].data2;
        this.options={
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'دمای کالکتورهای رفت و برگشت'
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
                    threshold: null,
                }
            },
            
            series: [{
                type: 'line',
                name: 'USD to EUR',
                data: temp_data,
                color: '#ff6459'
            },
            {
                type: 'line',
                name: '°C',
                data: temp_data2,
                color: '#539ffd'
            }]
        }
        Highcharts.chart('column',this.options );
    },err=>{});
  }


}
