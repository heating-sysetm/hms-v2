import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBoxComponent } from './alert-box.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [AlertBoxComponent],
  imports: [
    CommonModule , MaterialModule
  ],
  exports: [AlertBoxComponent]
})
export class AlertBoxModule { }
