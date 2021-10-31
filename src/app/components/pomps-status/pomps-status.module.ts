import { MaterialModule } from './../../modules/material/material.module';
import { PompsStatusComponent } from './pomps-status.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PompsStatusComponent],
  imports: [
    CommonModule,MaterialModule
  ],exports:[PompsStatusComponent]
})
export class PompsStatusModule { }
