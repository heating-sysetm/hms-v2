import { DataShareService } from './../../services/data-share.service';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {

  showChart = false;
  constructor(private api: ApiService, private datashare: DataShareService) {}

  ngOnInit(): void {

  }

  loadCharts() {
    this.api
      .getGasValues(
        this.datashare.start_time.value,
        this.datashare.end_time.value
      )
      .subscribe(
        (result) => {          
        },
        (err) => {}
      );
  }

filterLogs(){

}

filterData(){
  
}

}
