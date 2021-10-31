import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorFormModalComponent } from './sensor-form-modal.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SensorFormModalComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,MaterialModule
  ]
})
export class SensorFormModalModule { }
