import { ActivatedRoute } from '@angular/router';
import { sensorPorts } from './../../../components/place-modal-form/data';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Sensor } from './../../../components/place-modal-form/place-modal-form.component';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-sensor',
  templateUrl: './edit-sensor.component.html',
  styleUrls: ['./edit-sensor.component.scss']
})
export class EditSensorComponent implements OnInit {
  selectable = true;
  removable = true;
  addOnBlur = true;
  sensors: Sensor[] = [];
  scheck = [];
  public sensorForm: FormGroup;
  public sensorTypes= [];
  Ports = sensorPorts;
  public equipments = [];

  public loading = false;

  constructor(public dialogRef: MatDialogRef<EditSensorComponent>,
    private fb:FormBuilder, private api: ApiService
    ,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    this.loadData();
    this.sensorForm = this.fb.group({
      port: [Number.parseInt(this.data.portid), [Validators.required]],
      name: [this.data.name, [Validators.required]],
      type_id: [this.data.typeid, [Validators.required]],
      eq_id: [this.data.eqid, [Validators.required]],
    });
  }

  
  loadData(){
    this.api.getEquipments().subscribe(types=>{
      this.equipments=types['data'];
    });
    this.api.getSensorTypes().subscribe(types=>{
      this.sensorTypes=types['data'];
    });
  }

  submit() {
      this.api.updateSensor(this.data.sid,this.sensorForm.value).subscribe(result => {
        this.dialogRef.close(true);
      }
        , error => {
          console.log(error)
        })

  }


}

