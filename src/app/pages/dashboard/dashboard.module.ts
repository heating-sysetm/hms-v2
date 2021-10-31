import { WidgetManagementModule } from './../../components/widget-management/widget-management.module';
import { AlertBoxModule } from './../../components/alert-box/alert-box.module';
import { SensorFormModalModule } from './../../components/modals/sensor-form-modal/sensor-form-modal.module';
import { EquipmentsModalModule } from '../../components/modals/equipments-modal/equipments-modal.module';
import { PompsStatusModule } from './../../components/pomps-status/pomps-status.module';
import { DashboardBoylerChartsModule } from './dashboard-boyler-charts/dashboard-boyler-charts.module';
import { DashboardStatusBarModule } from './dashboard-status-bar/dashboard-status-bar.module';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { MaterialModule } from './../../modules/material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HumidityChartComponent } from './../../components/charts/humidity-chart/humidity-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartjsAreaComponent } from './../../components/charts/chartjs-area/chartjs-area.component';
import { SolidGaugeThreeComponent } from './../../components/charts/solid-gauge-three/solid-gauge-three.component';
import { SolidGaugeTwoComponent } from './../../components/charts/solid-gauge-two/solid-gauge-two.component';
import { TempOneComponent, DialogOverviewExampleDialog } from './../../components/widgets/temp-one/temp-one.component';
import { LineChartComponent } from './../../components/charts/line-chart/line-chart.component';
import { SolidGaugeComponent } from './../../components/charts/solid-gauge/solid-gauge.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { GaugeTempComponent } from 'src/app/components/charts/gauge-temp/gauge-temp.component';
import { WeatherComponent } from 'src/app/components/weather/weather.component';
import { DialogExampleDialog } from './dashboard-status-bar/dashboard-status-bar.component';
import {AlertsModalModule} from '../../components/modals/alerts-modal/alerts-modal.module';
@NgModule({
  declarations: [
    DashboardComponent,
    SolidGaugeComponent,
    SolidGaugeTwoComponent,
    SolidGaugeThreeComponent,
    ChartjsAreaComponent,
    LineChartComponent,
    HumidityChartComponent,
    DialogOverviewExampleDialog,GaugeTempComponent,WeatherComponent,
    DashboardHeaderComponent,DialogExampleDialog
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardStatusBarModule,
    DashboardRoutingModule,
    AlertsModalModule,
    WidgetManagementModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    TranslateModule,
    // NgClockPickerLibModule,
    MaterialModule,
    AlertBoxModule,
    DashboardBoylerChartsModule,
    PompsStatusModule,EquipmentsModalModule,SensorFormModalModule
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
