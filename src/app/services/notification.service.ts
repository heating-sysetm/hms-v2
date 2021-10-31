import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  form: FormGroup;

  types = ['alert', 'error', 'info', 'warn', 'success'];
  animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];

  constructor(private _notifications: NotificationsService,
    private _fb: FormBuilder) {
     }


     
  createSuccess(n_title,n_content) {
    this.form = this._fb.group({
      type: 'success',
      title: n_title,
      content: n_content,
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      animate: 'fromRight'
    });
		const temp = this.form.getRawValue();
		const title = temp.title;
		const content = temp.content;
		const type = temp.type;
    
		delete temp.title;
		delete temp.content;
		delete temp.type;

		this._notifications.create(title, content,type , temp)
  }

  createWarning(n_title,n_content) {
    this.form = this._fb.group({
      type: 'warning',
      title: n_title,
      content: n_content,
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      animate: 'fromRight'
    });
		const temp = this.form.getRawValue();
		const title = temp.title;
		const content = temp.content;
		const type = temp.type;
    
		delete temp.title;
		delete temp.content;
		delete temp.type;

		this._notifications.create(title, content,type , temp)
  }

  createError(n_title,n_content) {
    this.form = this._fb.group({
      type: 'error',
      title: n_title,
      content: n_content,
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      animate: 'fromRight'
    });
		const temp = this.form.getRawValue();
		const title = temp.title;
		const content = temp.content;
		const type = temp.type;
    
		delete temp.title;
		delete temp.content;
		delete temp.type;

		this._notifications.create(title, content,type , temp)
  }
  
  createInfo(n_title,n_content) {
    this.form = this._fb.group({
      type: 'info',
      title: n_title,
      content: n_content,
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      animate: 'fromRight'
    });
		const temp = this.form.getRawValue();
		const title = temp.title;
		const content = temp.content;
		const type = temp.type;
    
		delete temp.title;
		delete temp.content;
		delete temp.type;

		this._notifications.create(title, content,type , temp)
  }
  
  createAlert(n_title,n_content) {
    this.form = this._fb.group({
      type: 'alert',
      title: n_title,
      content: n_content,
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      animate: 'fromRight'
    });
		const temp = this.form.getRawValue();
		const title = temp.title;
		const content = temp.content;
		const type = temp.type;
    
		delete temp.title;
		delete temp.content;
		delete temp.type;

		this._notifications.create(title, content,type , temp)
	}

}
