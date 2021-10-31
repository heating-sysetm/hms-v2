import { MaterialModule } from './../../modules/material/material.module';
import { LoadingModule } from './../../components/loading/loading.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts.component';


import { Routes, RouterModule } from '@angular/router';
import {AlertsModalModule} from '../../components/modals/alerts-modal/alerts-modal.module';


const routes: Routes = [
  {
    path: '',component:AlertsComponent
  },]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AlertsRoutingModule { }


@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,AlertsRoutingModule,MaterialModule,
    LoadingModule,
    TranslateModule,AlertsModalModule
  ]
})
export class AlertsModule { }
