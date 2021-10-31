import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../modules/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EquipmentsModalComponent } from './equipments-modal.component';



@NgModule({
  declarations: [EquipmentsModalComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,MaterialModule
  ],
  exports:[]
})
export class EquipmentsModalModule { }
