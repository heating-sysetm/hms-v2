import { NotificationService } from './../../../services/notification.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {

  passForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService,private notif: NotificationService,
    public dialogRef: MatDialogRef<ChangePassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.passForm = this.fb.group({
      password : ['',Validators.required],
      repassword : ['',Validators.required]
    });
  }

  submit(){
    if (this.passForm.valid) {
      
      if (this.passForm.controls.password.value == this.passForm.controls.repassword.value) {
        this.api.changeUserPassword(this.data.id,this.passForm.value).subscribe(res=>{
          this.notif.createSuccess(
            '',
            'رمزعبور با موفقیت تغییر یافت'
          );
        });
      }else{
        this.notif.createSuccess(
          '',
          'لطفا فرم را به درستی تکمیل نمایید'
        );
      }


    }

  }

}
