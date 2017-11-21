import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthService } from './../auth/auth.service';
import { User } from '../../shared/models/user';

@Injectable()
export class UserService {
  private api_url: String = 'http://localhost:8000/api/v1/auth';

  constructor(private http: Http, private authHttp: AuthHttp, private auth: AuthService) { }

  createUser(user: User): Observable<any> {
    return this.http.post(`${this.api_url}/signup`, user).map(res => {
      const response = res.json();
      this.auth.storeToken(response.token);
      return response;
    });
  }

  loginUser(user: User): Observable<any> {
    return this.http.post(`${this.api_url}/login`, user).map(res => {
      const response = res.json();
      this.auth.storeToken(response.token);
      return response;
    });
  }

  logoutUser(): Observable<any> {
    return this.authHttp.get(`${this.api_url}/logout`).map(res => {
      const response = res.json();
      this.auth.destroyToken();
      return response;
    });
  }

  getProfile(): Observable<any> {
    return this.authHttp.get(`${this.api_url}/profile`).map(res => {
      const response = res.json();
      return response;
    });
  }

  private handleError(error: Response | any) {
    console.error('GameService:handleError', error);
    return Observable.throw(error);
  }
}
