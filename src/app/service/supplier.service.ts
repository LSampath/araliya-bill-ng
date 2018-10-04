import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs';
import {Supplier} from '../model/supplier';
import {AuthService} from './auth.service';

@Injectable()
export class SupplierService {

  constructor(private http: HttpClient, private config: ConfigService, private authService: AuthService) { }

  getSuppliers(): Observable<any> {
    const url = this.config.baseURL + '/supplier';
    return this.http.get(url);
  }

  getSupplier(supplier_id: string): Observable<any> {
    const url = this.config.baseURL + '/supplier/' + supplier_id;
    const options = {
      headers: new HttpHeaders({
        'Authorization': this.authService.getAccessToken()
      })
    };
    return this.http.get(url, options);
  }

  addSupplier(supplier: Supplier): Observable<any> {
    const url = this.config.baseURL + '/supplier/';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authService.getAccessToken()
      })
    };
    return this.http.post(url, supplier, options);
  }

  updateSupplier(update: Supplier): Observable<any> {
    const url = this.config.baseURL + '/supplier/' + update.supplier_id;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authService.getAccessToken()
      })
    };
    return this.http.put(url, update, options);
  }
}
