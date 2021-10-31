import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePassComponent } from './change-pass.component';



@NgModule({
  declarations: [ChangePassComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,MaterialModule
  ]
  ,exports:[ChangePassComponent]
})
export class ChangePassModule { }
