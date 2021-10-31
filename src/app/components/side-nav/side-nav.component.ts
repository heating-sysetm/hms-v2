import { ChangePassComponent } from './../modals/change-pass/change-pass.component';
import { NotificationService } from './../../services/notification.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ThemeService } from './../../theme/theme.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

export interface DialogData {
  data: Array<any>;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  simpleContent = '1';
  notifs = [];
  notifNumber = 0;
  private _mobileQueryListener: () => void;
  formGroup: FormGroup;
  loading = true;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private them: ThemeService,
    formBuilder: FormBuilder,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private api: ApiService,
    private router: Router, private ws: WebsocketService, private notif: NotificationService,
    public translate: TranslateService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.formGroup = formBuilder.group({
      isChecked: true,
    });
    // this.getSelectionData();
    this.loading = false;
    // this.api.getNotifs().subscribe(
    //   (result) => {
    //     if (result) {

    //     }
    //     result['data'].forEach(element => {
    //       let str = element.createdAt;
    //       str = str.substring(11, str.length-5);

    //       var temp ={
    //         id:element.id,
    //         title:element.title ,
    //         text: element.msg,
    //         date: str,
    //       }
    //       this.notifs.push(temp)
    //     });

    //   },
    //   (error) => {}
    // );
  }


  ngOnInit(): void {
    this.getStatusData();
    this.loadNotifs();
    this.ws.errorCounter.subscribe(count=>{
      this.notifNumber = count;
      this.notifs = this.ws.placeErrors;
    });
    
  }

  loadNotifs(){
    this.api.getNotifs().subscribe(notifs=>{
      this.notifs = notifs['data'];
      console.log(this.notifs);
      
      
    })
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  toggleTheme() {
    if (this.them.isDarkTheme()) {
      this.them.setLightTheme();
    } else {
      this.them.setDarkTheme();
    }
  }


  getStatusData() {
    this.api.getDashboard().subscribe(data => {
      this.ws.runSocket(8055);
    }, error => {
      this.notif.createError('خطا', 'اشکال در ارتباط با سرور');
    });
  }


  enLang() {
    this.translate.use('en');
  }



  faLang() {
    this.translate.use('fa');
  }

  
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  openDialog() {
    const dialogRef = this.dialog.open(EventsDialog, {
      data: { data: this.notifs },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openChangePassDialog() {
    const dialogRef = this.dialog.open(ChangePassComponent, {
      data: { id:1 },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'events.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class EventsDialog {
  constructor(
    public api: ApiService,
    public dialogRef: MatDialogRef<EventsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  deleteNotif(notif) {
    this.api.deactiveNotif(notif.id).subscribe(
      result => {
        const index: number = this.data.data.indexOf(notif);
        if (index !== -1) {
          this.data.data.splice(index, 1);
        }
      }, err => {

      }
    )

  }
}
