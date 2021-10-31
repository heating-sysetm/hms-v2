import { ApiService } from './../../services/api.service';
import { NotificationService } from './../../services/notification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form-modal',
  templateUrl: './user-form-modal.component.html',
  styleUrls: ['./user-form-modal.component.scss']
})
export class UserFormModalComponent implements OnInit {
  public userForm: FormGroup;
  constructor(private _fb:FormBuilder,
    private notif: NotificationService,
    private api: ApiService) { }

  ngOnInit(): void {
    this.userForm = this._fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      isAdmin: [false, Validators.required],
      sendSMS: [false, Validators.required],
    });
  }

  check() {
    if (this.userForm.controls.name.invalid) {
      this.notif.createError(
        'خطا',
        'نام و نام خانوادگی به درستی وارد نشده است'
      );
      return false;
    } else if (this.userForm.controls.password.invalid) {
      this.notif.createError('خطا', 'نام کاربری به درستی وارد نشده است');
      return false;
    } else if (this.userForm.controls.password.invalid) {
      this.notif.createError('خطا', 'نام کاربری به درستی وارد نشده است');
      return false;
    }
    return true;
  }

  addUser() {
    // console.log(this.translate.currentLang);

    if (this.check()) {
      console.log(this.userForm.value);
      this.api.addUser(this.userForm.value).subscribe(
        (result) => {
          console.log('res', result);
          // this.dataSource = this.dataSource.concat([result['data']]);
          this.notif.createSuccess('خطا', 'کاربر با موفقیت افزوده شد');
        },
        (err) => {
          console.log(err);
          this.notif.createError('خطا', 'امکان افزودن کاربر وجود ندارد');
        }
      );
    }
  }


}
