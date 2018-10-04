import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable()
export class AuthService {

  private access_token: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    // for development use only
    this.access_token = 'alsdkfjsd';
  }

  getAccessToken(): string {
    return this.access_token;
  }

  setAccessToken(token: string) {
    this.access_token = token;
  }

  authenticateUser(username, password): Observable<any> {
    const url = this.config.baseURL + '/user/auth';
    const body = {
      user_name: username,
      password: password
    };
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(url, body, options);
  }

  getUserDetails(): Observable<any> {
    const access_token = this.getAccessToken();
    const url = this.config.baseURL + '/user/' + access_token;
    const options = {
      headers: new HttpHeaders({
        'Authorization': this.access_token
      })
    };
    // const url = this.config.baseURL + '/user/' + '1';
    return this.http.get(url, options);
  }
}
