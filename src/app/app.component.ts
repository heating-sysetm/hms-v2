import { NotificationService } from './services/notification.service';
import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { DataShareService } from 'src/app/services/data-share.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SocketIoService } from './services/socket-io.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Heating-Monitoring-System';
  ss=true;
  constructor(private dataservice:DataShareService,private so:SocketIoService
    ,private api:ApiService,private notif: NotificationService,
    public translate: TranslateService){
    this.translate.addLangs(['en', 'fa']);
    this.translate.setDefaultLang('fa');
    this.translate.currentLang='fa';
    }

  changeData(){
    this.dataservice.changeMytext(5);
  }

  switchLang() {
    if(this.ss){
      this.ss=false;
      this.translate.use('en');
    }else{
      this.ss=true;
      this.translate.use('fa');
    }
  }





}
