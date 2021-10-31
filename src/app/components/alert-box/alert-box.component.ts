import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit, Input } from '@angular/core';

export interface Alert{
  title:string,
  importance:string,
  createdat:string,
  message:string
}
@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss']
})
export class AlertBoxComponent implements OnInit {
  // @Input() placeId!:number;
  alerts:Alert[] = [
    {
      title:'هشدار دمای رفت',importance:'توضیحات',createdat:'1400/04/04',
      message:'دمای رفت بیشتر از مقدار تعیین شده می باشد. دما : ۸۰ درجه سانتی گراد'
    },
  ];
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    // this.api.getPlaceActiveAlarms(this.placeId).subscribe(res=>{
    //   this.alerts=res['data'];
    // })
  }

  deactive(flag,id){
    this.api.changeAlertStatus(id,flag).subscribe(
      res=>{
        console.log(res);
        
      }
    );
  }

}
