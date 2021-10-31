import { DataShareService } from './../../services/data-share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  changed:any;
  temp:any;
  humidity:any;
  constructor(private dataService:DataShareService) { }

  ngOnInit(): void {
    this.dataService.changes.subscribe(
      (data) => {
        this.changed =data;
      }
    );
    this.dataService.outData.subscribe((newVal) => {
      this.temp=newVal;
    });
    this.dataService.outHData.subscribe((newVal) => {
      this.humidity=newVal;
    });
  }

}
