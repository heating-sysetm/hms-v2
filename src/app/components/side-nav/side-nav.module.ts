import { ChangePassModule } from './../modals/change-pass/change-pass.module';
import { ClockModule } from './../charts/clock/clock.module';
import { MaterialModule } from './../../modules/material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent, EventsDialog } from './side-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SideNavComponent,EventsDialog],
  imports: [
    CommonModule,
    ClockModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,TranslateModule,ChangePassModule
    
  ]
})
export class SideNavModule { }
