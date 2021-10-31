import { EventDialogComponent } from './../event-dialog/event-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { Component} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}
export interface Schadule {
  startDate: string;
  startTime:string;
  endDate: string;
  endTime:string
  status: boolean;
}

const ELEMENT_DATA: Schadule[] = [
  {startDate: '1399/07/15', startTime: '12:29 PM', endDate: '1399/07/15', endTime: '13:40 PM',status:true},
  {startDate: '1399/07/15', startTime: '12:29 PM', endDate: '1399/07/15', endTime: '13:40 PM',status:false},
];

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})

export class SchedulerComponent {
  displayedColumns: string[] = ['startDate', 'startTime', 'endDate', 'endTime','status','delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}