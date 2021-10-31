import { TempOneComponent } from './temp-one/temp-one.component';
import { MaterialModule } from './../../modules/material/material.module';
import { WidgetsComponent } from './widgets.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [WidgetsComponent,TempOneComponent],
  imports: [
    CommonModule,MaterialModule
  ],exports:[WidgetsComponent,TempOneComponent]
})
export class WidgetsModule { }
