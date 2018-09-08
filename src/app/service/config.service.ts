import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  baseURL = 'http://localhost:3000';

  constructor() { }
}
