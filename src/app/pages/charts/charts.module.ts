import { Filter2Module } from './../../components/filter2/filter2.module';
import { MaterialModule } from './../../modules/material/material.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxEchartsModule } from 'ngx-echarts';
import { GaugeTempComponent } from './../../components/charts/gauge-temp/gauge-temp.component';
import { ColumnRotatedThreeComponent } from './../../components/charts/column-rotated-three/column-rotated-three.component';
import { ColumnRotatedTwoComponent } from './../../components/charts/column-rotated-two/column-rotated-two.component';
import { LineRotatedComponent } from './../../components/charts/line-rotated/line-rotated.component';
import { ColumnRotatedComponent } from './../../components/charts/column-rotated/column-rotated.component';
import { DatePickerComponent } from './../../components/date-picker/date-picker.component';
import { ColumnBasicComponent } from './../../components/charts/column-basic/column-basic.component';
import { AreaChartComponent } from './../../components/charts/area-chart/area-chart.component';
import { ChartsComponent } from './charts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ChartsRoutingModule } from './charts-routing.module';
@NgModule({
  declarations: [
    ChartsComponent,
    AreaChartComponent,
    ColumnBasicComponent,
    DatePickerComponent,
    ColumnRotatedComponent,
    LineRotatedComponent,
    ColumnRotatedTwoComponent,
    ColumnRotatedThreeComponent,
    // GaugeTempCompoSnent,
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,Filter2Module,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxMaterialTimepickerModule
  ],
})
export class ChartsModule {}
