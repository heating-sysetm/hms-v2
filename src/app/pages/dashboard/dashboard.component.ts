import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ApiService } from './../../services/api.service';
import { TranslateService } from '@ngx-translate/core';
import { DataShareService } from 'src/app/services/data-share.service';
import { Component, OnInit } from '@angular/core';

interface Status {
  status_name: string;
  status_code: number;
  id: number
}
interface Place {
  createdAt: string
  dashboard_id: number
  determinatedTemp?: number
  eqCount: number
  id: number
  name: number
  port: number
  sensorCount: number
  status_id: number
  updatedAt: string
  url: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  changed: number;
  loading = true;
  sensors = [];
  eqs = [];
  times = [
    { value: 1000, viewValue: '1s' },
    { value: 2000, viewValue: '2s' },
    { value: 5000, viewValue: '5s' },
    { value: 10000, viewValue: '10s' },
    { value: 30000, viewValue: '30s' },
    { value: 60000, viewValue: '1m' },
  ];
  placestatus: Status = null;
  selected = 0;
  tsel = 1000;
  scSelect = 1;
  panelOpenState = true;
  myPlace: Place = null;



  constructor(private dataService: DataShareService, private ws: WebsocketService,
    private route: ActivatedRoute,
    private api: ApiService, public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.loadData();
    this.loading = false;
  }



  loadData() {
    this.route.params.subscribe(params => {
      this.api.getPlace(params['id']).subscribe(data => {
        this.myPlace = data['data'];
        this.getSensors(this.myPlace.id);
        this.ws.runSecondSocket(this.myPlace.port);
        this.statusChange();
      })
    })
    this.tsel = this.ws.selecte_time;
    this.dataService.changes.subscribe(
      (data) => {
        this.changed = data;
        this.loading = false;
      }
    );
  }
  getSensors(id) {
    this.api.getPlaceEquipments(id).subscribe(res => {
      this.eqs = res['data'];
      console.log('equipment',this.eqs);
      
    });

    this.api.getPlaceSensors(id).subscribe(res => {
      this.eqs.forEach(eq => {
        let temp = { id: eq.type_id, sensors: [] };
        let x = this.sensors.find(x => x.id == eq.type_id);
        if (!x) {
          res['data'].forEach(element => {
            temp.sensors.push(element);
          });
          
          this.sensors.push(temp);
        }

      });
    
    });
  }

  getSensorsList(id) {
    let temp = this.sensors.find(x => x.id == id);
    return temp;
  }



  onTimeChange(ob) {
    let selectedTime = ob.value;
    if (selectedTime != this.ws.selecte_time) {
      this.ws.selecte_time = selectedTime;
      this.ws.sendMessage(selectedTime);
    }

  }

  statusChange() {
    this.ws.placeStatus.subscribe(res => {
      let temp: Status[] = res;
      let index = temp.find(x => x.id == this.myPlace.id);
      this.placestatus = index;
    });

  }

}
