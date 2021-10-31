import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetManagementComponent } from './widget-management.component';
import { WidgetChartComponent } from './widget-chart/widget-chart.component';



@NgModule({
  declarations: [WidgetManagementComponent, WidgetChartComponent],
  imports: [
    CommonModule
  ],exports:[WidgetManagementComponent,WidgetChartComponent]
})
export class WidgetManagementModule { }
