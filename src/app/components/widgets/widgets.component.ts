import { WebsocketService } from './../../services/websocket.service';
import { webSocket } from 'rxjs/webSocket';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DataShareService } from 'src/app/services/data-share.service';
import { Component, OnInit, SimpleChanges, Input, HostListener } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
export interface Chart{
  id:string,
  value:number,
  eq_id:number,
  color:number,
  name:string,
  port_id:number,
  display:boolean
}
export interface SensorData{
  id:string,
  sensors:[any]
}
@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent implements OnInit {
  @Input() sensordata!:[SensorData];
  boylers:Array<any>=[1,2,3,4];
  sendData=false;
  list:Chart[]=[];
  values:any=null;
  constructor(private dataService:DataShareService,private api:ApiService) {
  }

  ngOnInit(): void {
    this.loadData();
    console.log('//////',this.list);
    
  }

  loadData(){
    this.sensordata.forEach(item =>{
      let tempData :Chart=null;
      item.sensors.forEach(element => {
        console.log(element);
        
         tempData = {
        id : 'bolyler ' +element.id,
        name : element.name,
        value : 45,
        color : 4,
        eq_id : element.eq_id,
        port_id:element.port_id,
        display:element.display
        }
        this.list.push(tempData);
      });
      
    });

  }




}
