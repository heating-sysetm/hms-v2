import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface AlarmData {
  name: string,
  description: string,
  importance_id: number
}

@Component({
  selector: 'app-alerts-modal',
  templateUrl: './alerts-modal.component.html',
  styleUrls: ['./alerts-modal.component.scss']
})

export class AlertsModalComponent implements OnInit {

  AlertForm: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  sensors=[];
  places=[];

  options: any[] = [{ name: 'مقایسه وضعیت ', id: 1 }, { name: 'مقایسه مقدار', id: 2 }];
  ATypes: any[] = [{ name: 'کم', id: 0 },{ name: 'زیاد', id: 1 }];
  statuse: any[] = [{ name: 'خراب', id: 1 }];
  operations = [];
  importanceid = null;
  constructor(private fb: FormBuilder,private api:ApiService,
    public dialogRef: MatDialogRef<AlertsModalComponent>) {
  }

  ngOnInit(): void {
    this.buildForms();
    this.loadSelectionData();
  }

  buildForms() {
    this.AlertForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      importance_id: [null, Validators.required],
      type: [null, Validators.required],
    });

    this.secondFormGroup = this.fb.group({
      place_id:[null, Validators.required],
      operation_id: [null, Validators.required],
      a_sensor_id: [null, Validators.required],
      b_sensor_id: [null],
      c_sensor_id: [null],
      d_sensor_id: [null,Validators.required],
      e_sensor_id: [null],
      f_sensor_id: [null],
    });

    this.thirdFormGroup = this.fb.group({
      place_id:[null, Validators.required],
      sensor_id: [null, Validators.required],
      status: [null, Validators.required],
    });
  }

  loadSelectionData(){
    this.api.getAllPlaces().subscribe(res=>{
      console.log(res);
      
      this.places=res['data'];
    });
    this.api.getOperations().subscribe(res=>{
      console.log(res);
      
      this.operations=res['data'];
    })
  }

  submit(){
    if (this.AlertForm.controls.type.value==1) {
      this.api.addAlarm(this.concatForms(this.AlertForm.value,this.thirdFormGroup.value))
      .subscribe(res=>{
        console.log(res);
        this.dialogRef.close(true);
      },err=>{
        console.log(err);
        
      });
    }else{
      this.api.addAlarm(this.concatForms(this.AlertForm.value,this.secondFormGroup.value))
      .subscribe(res=>{
        console.log(res);
        
        this.dialogRef.close(true);
      });
    }
  }



concatForms(form1, form2){
  let temp = {};
  temp = Object.assign(temp,form1);
  temp = Object.assign(temp,form2);
  return temp;
}

  changePlace(event){
    console.log(event.value);
    
    this.api.getPlaceSensors(event.value).subscribe(res=>{
      console.log('++++',res);
      
      this.sensors=res['data'];
    })
  }

  onImportanceChange(event) {
    this.importanceid = event.value;
  }
}
