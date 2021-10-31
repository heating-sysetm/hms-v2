import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  // time = {hour: 13, minute: 30};

    constructor(private fb:FormBuilder) { }
  
    ngOnInit(): void {

    }
  
  }