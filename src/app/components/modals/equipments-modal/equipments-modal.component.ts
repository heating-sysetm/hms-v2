import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Chips, Equipment, Sensor } from './../../place-modal-form/place-modal-form.component';
import { SensorTypes, TypeOfEquipments, sensorPorts } from './../../place-modal-form/data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-equipments-modal',
  templateUrl: './equipments-modal.component.html',
  styleUrls: ['./equipments-modal.component.scss']
})
export class EquipmentsModalComponent implements OnInit {
  selectable = true;
  removable = true;
  addOnBlur = true;

  eqs: Equipment[] = [];
  sensors: Sensor[] = [];
  placeId = 0;
  fcheck = [];
  scheck = [];
  places=[];
  public sensorForm: FormGroup;
  public eqForm: FormGroup;
  public sensorTypes: any[] = [];
  Ports = sensorPorts;
  public equipments: any[] = [];

  public eqTypes = [];
  public loading = false;
  public ipErr = false;
  public nameErr = false;
  public portErr = false;

  constructor(public dialogRef: MatDialogRef<EquipmentsModalComponent>,private fb:FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.loadData();
    this.eqForm = this.fb.group({
      name: ['', [Validators.required]],
      type_id: [0, [Validators.required]],
      place_id:[0,[Validators.required]]
    });
    this.sensorForm = this.fb.group({
      port: [0, [Validators.required]],
      name: ['', [Validators.required]],
      type_id: [0, [Validators.required]],
      eq_id: [0, [Validators.required]],
    });
  }

  
  loadData(){
    this.api.getAllPlaces().subscribe(res=>{
      this.places=res['data'];
    })
    this.api.getEquipmentTypes().subscribe(types=>{
      this.eqTypes=types['data'];
    });
    this.api.getSensorTypes().subscribe(types=>{
      this.sensorTypes=types['data'];
    });
  }

  add(): void {
    const value = (this.eqForm.controls.name.value || '').trim();
    const type = this.eqForm.controls.type_id.value;
    // Add our fruit
  // Add our eq
  if (value && type > 0) {
    this.eqs.push(this.eqForm.value);
    this.fcheck.push(type);

  }

    // Clear the input value
    this.eqForm.reset();
  }

  remove(eq: Equipment): void {
    const index = this.eqs.indexOf(eq);

    if (index >= 0) {
      this.eqs.splice(index, 1);
    }
  }


  submitEquipments() {
    this.eqs.forEach(eq => {
      this.api.addEquipments(eq).subscribe(equipmentResult => {
        this.equipments.push(equipmentResult['data']);
      }, error => {
        console.log(error);
      }
      )
    });
  }


  submit() {
    this.sensors.forEach(sen => {
      console.log(sen);
      this.api.addSensors(sen).subscribe(result => {
        this.dialogRef.close();
      }
        , error => {
          alert('fail to add');
        })
    })
  }



  addSensor(): void {
    const value = (this.sensorForm.controls.name.value || '').trim();
    const type = this.sensorForm.controls.type_id.value;
    let sensorEquipment = this.sensorForm.controls.eq_id.value;
    // Add our eq
    if (value && type > 0 && sensorEquipment > 0) {
      this.sensors.push(this.sensorForm.value);
      if (!this.scheck.includes(sensorEquipment)) {
        this.scheck.push(sensorEquipment);
      }
    }

    // Clear the input value
    this.sensorForm.reset();;
  }

  removeSensor(sensor: Sensor): void {
    const index = this.sensors.indexOf(sensor);

    if (index >= 0) {
      this.sensors.splice(index, 1);
    }
  }


}
