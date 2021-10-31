import { DateAdapter } from '@angular/material/core';
import { Subject } from 'rxjs';
import { ApiService } from './../../../services/api.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { formatDate } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { DataShareService } from './../../../services/data-share.service';
import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import * as jalaliMoment from 'jalali-moment';
@Component({
  selector: 'app-dashboard-status-bar',
  templateUrl: './dashboard-status-bar.component.html',
  styleUrls: ['./dashboard-status-bar.component.scss']
})
export class DashboardStatusBarComponent extends DateAdapter<jalaliMoment.Moment> implements OnInit {

  @Input() placeName!: string;
  @Input() status!: any;
  @Input() placeTemp!:number;
  @Output() up=new EventEmitter<boolean>(false);
  myDate = '';
  day='';
  days =['یک شنبه', 'دوشنبه', 'سه شنبه', 'چهار شنبه', 'پنج شنبه', 'جمعه', 'شنبه'];
  constructor(public dialog: MatDialog,
    private api: ApiService,
    public translate: TranslateService
  ) {
    super();
    super.setLocale('fa');
    this.myDate = this.today().locale('fa').format('YYYY/MM/DD')
    this.day=this.days[this.getDayOfWeek(this.today())];
    
  }
  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExampleDialog, {
      width: '250px',
      data: {id:this.status.id,temp:this.placeTemp},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result.flag) {
        this.placeTemp=result.temp;
      }
    });
  }

  changeStatusTo(status){
    this.api.updatePlaceStatus(this.status.id,{status_id:status}).subscribe(res=>{
      console.log(res);
    })
  }
  
  ///// jalali //////
  getYear(date: jalaliMoment.Moment): number {
    return this.clone(date).jYear();
  }

  getMonth(date: jalaliMoment.Moment): number {
    return this.clone(date).jMonth();
  }

  getDate(date: jalaliMoment.Moment): number {
    return this.clone(date).jDate();
  }

  getDayOfWeek(date: jalaliMoment.Moment): number {
    return this.clone(date).day();
  }

  getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
    switch (style) {
      case 'long':
      case 'short':
        return jalaliMoment.localeData('fa').jMonths().slice(0);
      case 'narrow':
        return jalaliMoment.localeData('fa').jMonthsShort().slice(0);
    }
  }

  getDateNames(): string[] {
    const valuesArray = Array(31);
    for (let i = 0; i < 31; i++) {
      valuesArray[i] = String(i + 1);
    }
    return valuesArray;
  }

  getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    switch (style) {
      case 'long':
        return jalaliMoment.localeData('fa').weekdays().slice(0);
      case 'short':
        return jalaliMoment.localeData('fa').weekdaysShort().slice(0);
      case 'narrow':
        return ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'];
    }
  }

  getYearName(date: jalaliMoment.Moment): string {
    return this.clone(date).jYear().toString();
  }

  getFirstDayOfWeek(): number {
    return jalaliMoment.localeData('fa').firstDayOfWeek();
  }

  getNumDaysInMonth(date: jalaliMoment.Moment): number {
    return this.clone(date).jDaysInMonth();
  }

  clone(date: jalaliMoment.Moment): jalaliMoment.Moment {
    return date.clone().locale('fa');
  }

  createDate(year: number, month: number, date: number): jalaliMoment.Moment {
    if (month < 0 || month > 11) {
      throw Error(
        `Invalid month index "${month}". Month index has to be between 0 and 11.`
      );
    }
    if (date < 1) {
      throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
    }
    const result = jalaliMoment()
      .jYear(year)
      .jMonth(month)
      .jDate(date)
      .hours(0)
      .minutes(0)
      .seconds(0)
      .milliseconds(0)
      .locale('fa');

    if (this.getMonth(result) !== month) {
      throw Error(`Invalid date ${date} for month with index ${month}.`);
    }
    if (!result.isValid()) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }

  today(): jalaliMoment.Moment {
    return jalaliMoment().locale('fa');
  }

  parse(
    value: any,
    parseFormat: string | string[]
  ): jalaliMoment.Moment | null {
    if (value && typeof value === 'string') {
      return jalaliMoment(value, parseFormat, 'fa');
    }
    return value ? jalaliMoment(value).locale('fa') : null;
  }

  format(date: jalaliMoment.Moment, displayFormat: string): string {
    date = this.clone(date);
    if (!this.isValid(date)) {
      throw Error('JalaliMomentDateAdapter: Cannot format invalid date.');
    }
    return date.format(displayFormat);
  }

  addCalendarYears(
    date: jalaliMoment.Moment,
    years: number
  ): jalaliMoment.Moment {
    return this.clone(date).add(years, 'jYear');
  }

  addCalendarMonths(
    date: jalaliMoment.Moment,
    months: number
  ): jalaliMoment.Moment {
    return this.clone(date).add(months, 'jmonth');
  }

  addCalendarDays(
    date: jalaliMoment.Moment,
    days: number
  ): jalaliMoment.Moment {
    return this.clone(date).add(days, 'jDay');
  }

  toIso8601(date: jalaliMoment.Moment): string {
    return this.clone(date).format();
  }

  isDateInstance(obj: any): boolean {
    return jalaliMoment.isMoment(obj);
  }

  isValid(date: jalaliMoment.Moment): boolean {
    return this.clone(date).isValid();
  }

  invalid(): jalaliMoment.Moment {
    return jalaliMoment.invalid();
  }

  deserialize(value: any): jalaliMoment.Moment | null {
    let date;
    if (value instanceof Date) {
      date = jalaliMoment(value);
    }
    if (typeof value === 'string') {
      if (!value) {
        return null;
      }
      date = jalaliMoment(value).locale('fa');
    }
    if (date && this.isValid(date)) {
      return date;
    }
    return super.deserialize(value);
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  styleUrls: ['dialog.scss'],
  templateUrl: 'dialog.html',
})
export class DialogExampleDialog {
  value = 0;

  constructor(private api:ApiService,
    public dialogRef: MatDialogRef<DialogExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.value = this.data.temp;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value / 1) + '°';
    }
    this.value = value;
    return value;
  }

  submitTemp() {
    this.api.changePlaceTempratuer(this.data.id,this.value).subscribe(res=>{
      console.log(res);
      
    });
  }
}

