import { ApiService } from 'src/app/services/api.service';
import { EquipmentsModalComponent } from './../modals/equipments-modal/equipments-modal.component';
import { TypeOfEquipments, SensorTypes, sensorPorts } from './data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface Equipment {
    type_id: number,
    place_id: number,
    name: string,
}

export interface Chips {
    key: number,
    equipment?: number,
    value: string,
}

export interface Sensor {
    port: number,
    name: string,
    type_id: number,
    eq_id: number
}

@Component({
    selector: 'app-place-modal-form',
    templateUrl: './place-modal-form.component.html',
    styleUrls: ['./place-modal-form.component.scss']
})
export class PlaceModalFormComponent implements OnInit {
    @Output() save = new EventEmitter<boolean>(false);
    selectable = true;
    removable = true;
    isMobile = false;

    eqs: Equipment[] = [];
    sensors: Sensor[] = [];
    placeId = 0;
    fcheck = [];
    scheck = [];

    public sensorForm: FormGroup;
    public equipmentsForm: FormGroup;
    public placeForm: FormGroup;
    public sensorTypes: any[] = [];
    Ports = sensorPorts;
    public equipments: any[] = [];
    public eqTypes = [];
    public loading = false;

    constructor(public dialogRef: MatDialogRef<PlaceModalFormComponent>
        , private _formBuilder: FormBuilder, private api: ApiService) {
        this.isMobile = window.innerWidth < 650;
    }

    ngOnInit(): void {
        this.buildForms();
    }

    buildForms() {
        this.placeForm = this._formBuilder.group({
            name: ['', [Validators.required]],
            url: ['', Validators.required],
            port: ['', Validators.required],
            place_id: [1]
        });
        this.equipmentsForm = this._formBuilder.group({
            state_heat_sys: [true],
            state_water_heat: [true],
            temp_up_water_heat: [''],
            temp_down_water_heat: [''],
            limit_dif_input_value: [''],
            temp_hyst:[''],
            t_pump_work_cycle: [''],
            t_pump_work: [true],
            state_pump: [true],
            temp_water_heat: [true],
            temp_out_value: [true],
            water_heat_on: [true],
            show_pumps: [true],
            show_boilers: [true],
            number_of_pumps:['',Validators.required],
            number_of_boilers:['',Validators.required]
        });
        
    }



    submit() {
        this.sensors.forEach(sen => {
            console.log(sen);
            this.api.addSensors(sen).subscribe(result => {
                this.save.emit(true);
                this.dialogRef.close();
            }
                , error => {
                    alert('fail to add');
                })
        })
    }


}
