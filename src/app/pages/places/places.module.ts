import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaceModalFormModule } from './../../components/place-modal-form/place-modal-form.module';
import { OptionMenuModule } from './../../components/option-menu/option-menu.module';
import { MaterialModule } from './../../modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesComponent } from './places.component';
import { Routes, RouterModule } from '@angular/router';
import { PlaceEditComponent } from './place-edit/place-edit.component';


const routes: Routes = [
  {
    path: '',component:PlacesComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesRoutingModule { }



@NgModule({
  declarations: [PlacesComponent,PlaceEditComponent],
  imports: [
    CommonModule,PlacesRoutingModule,MaterialModule,
    OptionMenuModule,PlaceModalFormModule,FormsModule,ReactiveFormsModule
  ]
})
export class PlacesModule { }
