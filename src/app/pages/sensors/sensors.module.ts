import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from './../../components/confirm-dialog/confirm-dialog.module';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule } from './../../components/loading/loading.module';
import { MaterialModule } from './../../modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorsComponent } from './sensors.component';

import { Routes, RouterModule } from '@angular/router';
import { EditSensorComponent } from './edit-sensor/edit-sensor.component';


const routes: Routes = [
  {
    path: '',component:SensorsComponent
  },]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
  })
  export class SensorRoutingModule { }
  

@NgModule({
  declarations: [SensorsComponent,EditSensorComponent],
  imports: [
    CommonModule,SensorRoutingModule,MaterialModule,
    LoadingModule,FormsModule,ReactiveFormsModule,
    TranslateModule,ConfirmDialogModule
  ]
})
export class SensorsModule { }
