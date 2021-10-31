import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaterialModule } from './../../modules/material/material.module';
import { Filter2Component } from './filter2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [Filter2Component],
  imports: [
    CommonModule,MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxMaterialTimepickerModule
  ],
  exports:[Filter2Component]
})
export class Filter2Module { }
