import { EditSensorComponent } from './edit-sensor/edit-sensor.component';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ConfirmDialogComponent } from './../../components/confirm-dialog/confirm-dialog.component';
import { SensorFormModalComponent } from './../../components/modals/sensor-form-modal/sensor-form-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {
  name = "";
  displayedColumns: string[] = [
    'name',
    'typename',
    'eqname',
    'sdisplay',
    'options'
  ];
  dataSource!: MatTableDataSource<any>;

  public loading = false;
  constructor(public dialog: MatDialog,
    private api: ApiService,
    public translate: TranslateService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.api.getSensors().subscribe(data => {
      console.log(data);

      this.dataSource = new MatTableDataSource(data['data']);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openSensorFormDialog() {
    const dialogRef = this.dialog.open(SensorFormModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }
  changeStatus(event: MatSlideToggleChange, id) {
    this.api.updateSensorStatus(id, { display: event.checked }).subscribe(res => { });
  }

  delete(id, name) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: name, });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.api.deleteSensor(id).subscribe(res => {
          this.loadData();
        })
      }
    });

  }


  openEdit(item) {
    const dialogRef = this.dialog.open(EditSensorComponent, { data: item, });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      
      if (result) {
        this.loadData();
      }
    });

  }
}
