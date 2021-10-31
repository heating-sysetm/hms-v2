import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MaterialModule } from './../../modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceModalFormComponent } from './place-modal-form.component';



@NgModule({
  declarations: [PlaceModalFormComponent],
  imports: [
    CommonModule,MaterialModule,ReactiveFormsModule,FormsModule
  ]
})
export class PlaceModalFormModule { }
