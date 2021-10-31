import { TranslateModule } from '@ngx-translate/core';
import { ClockModule } from './../../../components/charts/clock/clock.module';
import { DashboardStatusBarComponent } from './dashboard-status-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';



@NgModule({
  declarations: [DashboardStatusBarComponent],
  imports: [
    CommonModule,ClockModule,TranslateModule,MaterialModule
  ],
  exports:[DashboardStatusBarComponent]
})
export class DashboardStatusBarModule { }
