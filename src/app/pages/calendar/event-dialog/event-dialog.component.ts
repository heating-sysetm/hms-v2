import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {  DialogOverviewExampleDialog } from './../../../components/widgets/temp-one/temp-one.component';
import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface Status {
  name: string;
  value: boolean;
}

interface DialogData {
  start_date:string;
  end_date:string;
  start_time:string;
  end_time:string;
  status:boolean;
}
@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent implements OnInit{

  boylers: Status[] = [
    {name: 'روشن', value: true},
    {name: 'خاموش', value: false}
  ];


  eventForm:FormGroup;

  constructor(private _fb:FormBuilder,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.eventForm=this._fb.group({
      start_date:['',Validators.required],
      end_date:['',Validators.required],
      start_time:['',Validators.required],
      end_time:['',Validators.required],
      status:false
    });
  }



}
