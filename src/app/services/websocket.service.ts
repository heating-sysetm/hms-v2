import { NotificationService } from './notification.service';
import { DataShareService } from 'src/app/services/data-share.service';
import { webSocket } from 'rxjs/webSocket';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class WebsocketService {
  subject: any;
  subject2: any;
  port: any;
  flag = true;
  selecte_time: number = 1000;
  selected_port: number;
  sensorData=new BehaviorSubject<any>(null);
  placeStatus=  new BehaviorSubject<[]>([]);
  placeErrors= [];
  errorCounter=new BehaviorSubject<number>(0);
  constructor(private datash: DataShareService,private notif: NotificationService) {}


  
  runSocket(port) {
    this.port = port;
    this.subject = webSocket('ws://localhost:' + port);
    
    this.subject.subscribe(
      (result) => {
        if (result['error']) {
          this.placeErrors.push(result);
          this.errorCounter.next(this.placeErrors.length);
        }
        else if (result['data']) {
          this.placeStatus.next(result['data']);
        }
      },
      (err) => {
        this.notif.createError('خطا','اشکال در ارتباط با سرور');
      },
      () => {
        this.notif.createError('خطا',' ارتباط با سرور قطع شد');
      }
    );
    this.subject.onclose = function () {
      this.close();
    };
  }

  runSecondSocket(port) {
    this.subject2 = webSocket('ws://localhost:' + port);
    this.subject2.subscribe(
      (result) => {
        if (result) {
          // console.log(result);
          
          this.sensorData.next(result);
        }
      },
      (err) => {
        this.notif.createError('خطا','اشکال در ارتباط با سرور');
      },
      () => {
        this.notif.createError('خطا',' ارتباط با سرور قطع شد');
      }
    );
    this.subject2.onclose = function () {
      console.log('+++++++++++++++++++++++++close');
      
      this.close();
    };
  }

  private getNewWebSocket(port) {
    console.log("webSocket('ws://localhost:'" + port);
    this.close();
    return webSocket('ws://localhost:' + port);
  }
  sendMessage(time: any) {
    this.subject.next(time);
    // this.runSocket(this.port);
  }
  close() {
    this.subject2.complete();
    this.subject2 = null;
    this.subject.complete();
    this.subject = null;
  }
}
