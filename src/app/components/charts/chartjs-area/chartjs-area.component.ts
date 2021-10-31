import { TranslateService } from '@ngx-translate/core';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  SimpleChanges,
} from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { DataShareService } from 'src/app/services/data-share.service';
@Component({
  selector: 'app-chartjs-area',
  templateUrl: './chartjs-area.component.html',
  styleUrls: ['./chartjs-area.component.scss'],
  inputs: [`changed`],
})
export class ChartjsAreaComponent implements OnInit {
  @ViewChild('myCanvas') canvas: ElementRef;
  chart: any;
  gradient: any;
  data: any = {
    labels: [
      'nan',
      'nan',
      'nan',
      'nan',
      'nan',
      'nan',
      'nan',
      'nan',
      'nan',
      'nan',
    ],
    datasets: [
      {
        label: 'دمای رفت',
        backgroundColor: '#f66f200f',
        pointBackgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#f26c05',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        label: 'دمای برگشت',
        backgroundColor: '#00d4f61a',
        pointBackgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#00d4f6',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  };
  min = 0;
  max = 100;
  options: any = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      easing: 'easeInOutQuad',
      duration: 520,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'rgba(200, 200, 200, 0.2)',
            lineWidth: 1,
          },
          ticks: {
            fontColor: '#ff5722', // labels such as 10, 20, etc
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: 'rgba(200, 200, 200, 0.2)',
            lineWidth: 1,
          },
          ticks: {
            fontColor: '#ff5722', // labels such as 10, 20, etc
            beginAtZero: true,
            steps: 20,
            stepValue: 20,
            suggestedMax: 100,
            min: 0,
          },
        },
      ],
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    legend: {
      position: 'bottom',
      labels: {
        fontColor: '#7b7b7b',
      },
    },
    point: {
      backgroundColor: '#7b7b7b',
    },
    tooltips: {
      titleFontFamily: 'Open Sans',
      backgroundColor: 'rgba(0,0,0,0.3)',
      titleFontColor: 'red',
      caretSize: 5,
      cornerRadius: 2,
      xPadding: 10,
      yPadding: 10,
    },
  };

  loading = true;
  constructor(
    private dataService: DataShareService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    if(this.translate.currentLang=="en"){
      this.chart.data.datasets[0].label = 'output'; //change all labels
      this.chart.data.datasets[1].label = 'input';
      this.chart.update();
    }

    // }
    this.dataService.outputData.subscribe((newVal) => {
      this.data.datasets[0].data.shift(1);
      this.data.datasets[0].data.push(newVal);
      // this.max = newVal[0] + 1;
      this.data.labels.shift(1);
      let minut=new Date().getMinutes();
      let second=new Date().getSeconds()
      if (minut<10 && second>10) {
        this.data.labels.push('0'+minut+':'+second);
      }else if (minut>10 && second<10) {
        this.data.labels.push(minut+':'+'0'+second);
      }else if (minut<10 && second<10) {
        this.data.labels.push('0'+minut+':'+'0'+second);
      }else{
        this.data.labels.push(minut+':'+second);
        this.data.labels.fontColor='#000';
      }
      
      // console.log(this.data.labels);
      this.chart.update();
    });
    this.dataService.inputData.subscribe((newVal) => {
      this.data.datasets[1].data.shift(1);
      this.data.datasets[1].data.push(newVal);
      // this.max = newVal[0] - 10;
      this.chart.update();
      this.loading = false;
    });
    this.chart = new Chart('canvas', {
      type: 'line',
      data: this.data,
      options: this.options,
    });
  }
  }

