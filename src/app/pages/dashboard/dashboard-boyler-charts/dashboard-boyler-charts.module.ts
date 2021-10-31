import { WidgetsModule } from './../../../components/widgets/widgets.module';
import { MaterialModule } from './../../../modules/material/material.module';
import { DashboardBoylerChartsComponent } from './dashboard-boyler-charts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DashboardBoylerChartsComponent],
  imports: [
    CommonModule,MaterialModule,WidgetsModule
  ],exports:[DashboardBoylerChartsComponent]
})
export class DashboardBoylerChartsModule { }
