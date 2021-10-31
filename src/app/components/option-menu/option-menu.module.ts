import { MaterialModule } from './../../modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionMenuComponent } from './option-menu.component';



@NgModule({
  declarations: [OptionMenuComponent],
  imports: [
    CommonModule,MaterialModule
  ],
  exports:[OptionMenuComponent]
})
export class OptionMenuModule { }
