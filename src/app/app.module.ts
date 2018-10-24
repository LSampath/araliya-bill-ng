import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import {AppRoutesModule} from './app.routes.module';
import { UserComponent } from './component/user/user.component';
import { SupplierComponent } from './component/supplier/supplier.component';
import {AuthService} from './service/auth.service';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfigService} from './service/config.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MaterializeModule} from 'angular2-materialize';
import {SupplierService} from './service/supplier.service';
import {UserService} from './service/user.service';
import {SupplierDetailsComponent} from './component/supplier-details/supplier-details.component';
import {InvoiceService} from './service/invoice.service';
import { ExpenseComponent } from './component/expense/expense.component';
import {MzCollectionModule, MzDatepickerModule, MzInputModule, MzSelectModule, MzValidationModule} from 'ngx-materialize';
import { InvoiceComponent } from './component/invoice/invoice.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    UserComponent,
    SupplierComponent,
    SupplierDetailsComponent,
    ExpenseComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterializeModule,
    MzDatepickerModule,
    MzInputModule,
    MzSelectModule,
    MzValidationModule,
    MzCollectionModule
  ],
  providers: [
    AuthService,
    SupplierService,
    UserService,
    InvoiceService,
    ConfigService,
    HttpClient,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
