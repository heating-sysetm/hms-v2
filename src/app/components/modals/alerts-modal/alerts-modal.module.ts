import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsModalComponent } from './alerts-modal.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AlertsModalComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,MaterialModule
  ]
})
export class AlertsModalModule { }
