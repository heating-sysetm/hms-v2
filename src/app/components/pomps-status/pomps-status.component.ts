import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pomps-status',
  templateUrl: './pomps-status.component.html',
  styleUrls: ['./pomps-status.component.scss']
})
export class PompsStatusComponent implements OnInit {
   pompStatus !:number;
   items=[{status:0},{status:1},{status:2}];
  constructor() { }

  ngOnInit(): void {
  }

}
