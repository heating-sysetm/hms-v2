import { DataShareService } from './data-share.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../model/User';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {


    constructor(private http: HttpClient,private dataShare:DataShareService) {}

    public get currentUserValue(): User {
        return this.dataShare.currentUserValue();
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.dataShare.setCurrentUserSubject(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.dataShare.setCurrentUserSubject(null);
    }
}