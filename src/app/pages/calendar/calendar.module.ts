import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { SchedulerComponent } from './scheduler/scheduler.component';
// import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { CalendarComponent } from './calendar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRoutingModule } from './calendar-routing.module';
import { EventDialogComponent } from './event-dialog/event-dialog.component'; // a plugin
import { NgClockPickerLibModule } from 'ng-clock-picker-lib';
// import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [CalendarComponent, SchedulerComponent, EventDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarRoutingModule,
    // jqxSchedulerModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    // NgxMaterialTimepickerModule
    
  ],
})
export class CalendarModule {}
