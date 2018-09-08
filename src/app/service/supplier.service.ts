import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable()
export class SupplierService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getSuppliers() {
    const url = this.config.baseURL + '/supplier';
    return this.http.get(url);
  }
}
