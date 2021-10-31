import { MaterialModule } from './../../modules/material/material.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoadingModule } from './../../components/loading/loading.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LoadingModule,
    LoginRoutingModule
    
  ]
})
export class LoginModule { }
