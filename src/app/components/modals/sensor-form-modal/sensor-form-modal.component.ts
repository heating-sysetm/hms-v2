import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { sensorPorts } from './../../place-modal-form/data';
import { Equipment, Sensor } from './../../place-modal-form/place-modal-form.component';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sensor-form-modal',
  templateUrl: './sensor-form-modal.component.html',
  styleUrls: ['./sensor-form-modal.component.scss']
})
export class SensorFormModalComponent implements OnInit {
  selectable = true;
  removable = true;
  addOnBlur = true;

  eqs: Equipment[] = [];
  sensors: Sensor[] = [];
  scheck = [];
  public sensorForm: FormGroup;
  public sensorTypes= [];
  Ports = sensorPorts;
  public equipments = [];

  public loading = false;

  constructor(public dialogRef: MatDialogRef<SensorFormModalComponent>,
    private fb:FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.loadData();
    this.sensorForm = this.fb.group({
      port: [0, [Validators.required]],
      name: ['', [Validators.required]],
      type_id: [0, [Validators.required]],
      eq_id: [0, [Validators.required]],
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
    this.sensors.forEach(sen => {
      this.api.addSensors(sen).subscribe(result => {
        this.dialogRef.close();
      }
        , error => {
          console.log(error)
        })
    });
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
