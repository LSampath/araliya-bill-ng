import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable()
export class AuthService {

  private access_token: string;

  constructor(private http: HttpClient, private config: ConfigService) { }

  getAccessToken(): string {
    return this.access_token;
  }

  setAccessToken(token: string) {
    this.access_token = token;
  }

  authenticateUser(username, password): Observable<any> {
    const url = this.config.baseURL + '/user/auth';
    const body = {
      username: username,
      password: password
    };
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(url, body, options);
  }

  // addTask(name, sdate, edate, category): Observable<any> {
  //   const url = 'http://localhost:3000/tast/add';
  //   const body = {
  //     name: name,
  //     s_date: sdate,
  //     e_date: edate,
  //     category: category
  //   };
  //   const headers = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   return this.http.post(url, body, headers);
  // }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   async example() {
//     const headers = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json'
//       })
//     };
//     const body = {
//       task: 'skdfsdlfksj',
//       s_date: '2019-19-91',
//       e_date: '2019-19-91',
//       category: 'slkdfskdlfj'
//     };
//     const httpResult = await this.http.post('http://localhost:3000/lksdfdkljfdf', body, headers);
//   }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
