import { Component, OnInit } from '@angular/core';
export interface ChartData{
  id:string,title:string,color:number
}
@Component({
  selector: 'app-widget-management',
  templateUrl: './widget-management.component.html',
  styleUrls: ['./widget-management.component.scss']
})
export class WidgetManagementComponent implements OnInit {
data :ChartData[]= [
  {id:'cistern2' , color:5,title:'مخزن آب مصرفی'},
  {id:'hiumidity' , color:7,title:'دمای محیط بیرون'},
  {id:'outtemp' , color:6,title:'میزان رطوبت'},
  {id:'cistern3' , color:3,title:'میزان اکسیژن'},
]
  constructor() { }

  ngOnInit(): void {
  }

}
