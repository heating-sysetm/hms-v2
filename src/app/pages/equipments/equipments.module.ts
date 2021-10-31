import { ConfirmDialogModule } from './../../components/confirm-dialog/confirm-dialog.module';
import { MaterialModule } from './../../modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentsComponent } from './equipments.component';


import { Routes, RouterModule } from '@angular/router';
import { LoadingModule } from 'src/app/components/loading/loading.module';
import { TranslateModule } from '@ngx-translate/core';
import { EqEditComponent } from './eq-edit/eq-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',component:EquipmentsComponent
  },]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class EquipmentsRoutingModule { }
  


@NgModule({
  declarations: [EquipmentsComponent,EqEditComponent],
  imports: [
    CommonModule,MaterialModule,
    LoadingModule,FormsModule,ReactiveFormsModule,
    TranslateModule,EquipmentsRoutingModule,ConfirmDialogModule
  ]
})
export class EquipmentsModule { }
