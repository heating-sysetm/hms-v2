import { NotificationService } from './../../services/notification.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';
import { PlaceModalFormComponent } from './../../components/place-modal-form/place-modal-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Place } from './place';
import { DataShareService } from 'src/app/services/data-share.service';
import { PlaceEditComponent } from './place-edit/place-edit.component';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  places: Place[] = []
  statuses=[];
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private api: ApiService,
    private ws:WebsocketService,private notif: NotificationService,private dataShare:DataShareService
  ) { }

  ngOnInit(): void {
    this.loadData();
    // this.getStatusData();
  }

  loadData() {
    this.api.getAllPlaces().subscribe(data => {
      console.log(data);
      
      this.dataShare.setPlaces(data['data']);
    });
    this.dataShare.places.subscribe(data=>{
      this.places=data;
    });
    this.ws.placeStatus.subscribe(status=>{
      this.statuses = status;
    });
  }

  reload(flag:boolean){
    if (flag) {
      this.loadData();
    }
  }


  openDialog() {
    const dialogRef = this.dialog.open(PlaceModalFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.reload(true);
    });
  }

  showDashboard(port,id) {
    this.router.navigate(['pages/dashboard/'+id]);
    setTimeout(()=>{
      this.ws.sendMessage(100);
    },2000);
  }

  
}
