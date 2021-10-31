import { ClockComponent } from './clock.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ClockComponent],
  imports: [
    CommonModule
  ],
  exports:[ClockComponent]
})
export class ClockModule { }
