import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './../../services/api.service';
import { NotificationService } from './../../services/notification.service';
import { Component, OnInit } from '@angular/core';

interface Dashboards {
  title: string;
  url: string;
  port: number;
  number_of_boilers: number;
  number_of_pumps: number;
}

const ELEMENT_DATA = [];

const Dashboard_DATA: Dashboards[] = [];

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {

  DashboardDC: string[] = ['title', 'url', 'port','number_of_boilers','number_of_pumps','options'];
  dashboardDS = [];

  constructor(
    private notif: NotificationService,
    private api: ApiService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    // this.dataSource = ELEMENT_DATA;
    // this.getDashboards();
    // this.dashboardDS=Dashboard_DATA;
    // a form for add Dashboards
  }
// user methods



  // Dashboard methods
  getDashboards() {
    // this.api.getDashboards().subscribe(
    //   (result) => {
    //     let Dashboards = result['data'];
    //     this.dashboardDS = Dashboards;
    //   },
    //   (error) => {
    //     this.notif.createError(
    //       'خطا',
    //       'امکان افزودن داشبورد وجود ندارد. لطفا دوباره امتحان کنید'
    //     );
    //   }
    // );
  }

  deleteDashboard(dashboard) {
    this.api.deleteUser(dashboard.id).subscribe(
      (result) => {
        this.notif.createSuccess('', 'داشبورد با موفقیت حذف شد');
        const index: number = this.dashboardDS.indexOf(dashboard);
        if (index !== -1) {
          let x = this.dashboardDS
            .slice(0, index)
            .concat(this.dashboardDS.slice(index + 1, this.dashboardDS.length));
          this.dashboardDS = x;
        }
      },
      (error) => {
        this.notif.createError(
          'خطا',
          'داشبورد حذف نشد لطفا دوباره امتحان کنید'
        );
      }
    );
  }
  editConfig(dashboard_id){

  }

}
