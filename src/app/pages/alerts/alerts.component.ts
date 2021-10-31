import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './../../services/api.service';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from './../../services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import {SensorFormModalComponent} from '../../components/modals/sensor-form-modal/sensor-form-modal.component';
import {AlertsModalComponent} from '../../components/modals/alerts-modal/alerts-modal.component';
import { trigger, state, transition, style, animate } from '@angular/animations';

export interface User {
  name: string;
  username: string;
  password: string;
  id: string;
  phone: string;
  email: string;
  isAdmin: boolean;
}
const ELEMENT_DATA: User[] = [];
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AlertsComponent implements OnInit {
  name="";
  displayedColumns: string[] = [
    'title',
    'importance',
    'type',
    'alertType',
    'status',
    'options'
  ];
  expandedElement: string | null;
  dataSource =[];

  public loading = false;
  constructor(public dialog: MatDialog,
    private notif: NotificationService,
    private _formBuilder: FormBuilder,
    private api: ApiService,
    public translate: TranslateService) { }

  ngOnInit(): void {
    this.loadData();
  }


  loadData(){
    this.api.getAlarms().subscribe(res=>{
      console.log(res);
      
      this.dataSource = res['data'];
    })
  }

  delete(id){
    this.api.deleteAlarm(id).subscribe(res=>{
      console.log(res);
      this.loadData();
    });
  }

  changeStatus(event: MatSlideToggleChange, id) {
    this.api.changeAlarmStatus(id, { status: event.checked }).subscribe(res => {
      console.log(res);
      
     });
  }



  openSensorFormDialog() {
    const dialogRef = this.dialog.open(AlertsModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadData();
      }
    });
  }

}
