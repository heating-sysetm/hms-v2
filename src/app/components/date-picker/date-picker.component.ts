import { ApiService } from './../../services/api.service';
import { NotificationService } from './../../services/notification.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import * as jalaliMoment from 'jalali-moment';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataShareService } from 'src/app/services/data-share.service';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';

export const PERSIAN_DATE_FORMATS = {
  parse: {
    dateInput: 'jYYYY-jMM-jDD',
  },
  display: {
    dateInput: 'jYYYY-jMM-jDD',
    monthYearLabel: 'jYYYY jMMMM',
    dateA11yLabel: 'jYYYY-jMM-jDD',
    monthYearA11yLabel: 'jYYYY jMMMM',
  },
};

export interface FilterData {
  start_date: string;
  end_time: string;
  place_id: number;
  sensor_id: number;
}

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent
  extends DateAdapter<jalaliMoment.Moment>
  implements OnInit {

  @Output() filterData = new EventEmitter<FilterData>(null);
  public dateForm: FormGroup;

  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#424242',
      buttonColor: '#fff',
    },
    dial: {
      dialBackgroundColor: '#555',
    },
    clockFace: {
      clockFaceBackgroundColor: '#555',
      clockHandColor: '#9fbd90',
      clockFaceTimeInactiveColor: '#fff',
    },
  };

  places: any[] = [];
  sensors = [];

  constructor(private fb: FormBuilder,
    private data_sharing: DataShareService,
    private notif: NotificationService,private api:ApiService
  ) {
    super();
    super.setLocale('fa');
    this.dateForm = this.fb.group({
      start_time: [jalaliMoment, Validators.required],
      end_time: [jalaliMoment, Validators.required],
      stime: ['', Validators.required],
      etime: ['', Validators.required],
      place: [null, Validators.required],
      sensor: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.api.getAllPlaces().subscribe(res=>{
      this.places=res['data'];
    });
  }

  changePlace(event){
    this.api.getEquipmentSensors(event.value).subscribe(res=>{
      this.sensors=res['data'];
    });
  }


  dateFilter(){
    if (!this.dateForm.invalid) {
      let temp: FilterData = null;
      temp.start_date = this.data_sharing.getGDate(this.dateForm.value['start_time'], this.dateForm.controls.stime.value)
      temp.end_time = this.data_sharing.getGDate(this.dateForm.value['end_time'], this.dateForm.controls.etime.value)
      temp.place_id = this.dateForm.controls.place.value;
      temp.sensor_id = this.dateForm.controls.sensor.value;
      this.filterData.emit(temp);
    } else {
      this.notif.createError('خطا', 'لطفا تمامی فیلد ها را تکمییل نمایید');
    }
  };






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
