import { SensorData } from './../../../components/widgets/widgets.component';
import { Sensor } from './../../../components/place-modal-form/place-modal-form.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-boyler-charts',
  templateUrl: './dashboard-boyler-charts.component.html',
  styleUrls: ['./dashboard-boyler-charts.component.scss']
})
export class DashboardBoylerChartsComponent implements OnInit {
  @Input() recivedSensors!:SensorData; 
  dataForChilds=[];
  constructor() { }

  ngOnInit(): void {
    this.dataForChilds=this.setData();
  }
  setData(){
  
    let list=[];
    this.recivedSensors.sensors.forEach(sen => {
      
      let temp = { id: sen.eq_id, sensors: [] };
      let x = list.find(x => x.id == sen.eq_id);
      if (!x) {
        this.recivedSensors.sensors.forEach(element => {
          if (element.eq_id == sen.eq_id) {
            temp.sensors.push(element);
          }
        });
        console.log(temp);
        
        list.push(temp);
      }

    });
    return list;
  }

}
