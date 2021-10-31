import { MaterialModule } from './../../modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormModalComponent } from './user-form-modal.component';



@NgModule({
  declarations: [UserFormModalComponent],
  imports: [
    CommonModule,MaterialModule
  ]
})
export class UserFormModalModule { }
