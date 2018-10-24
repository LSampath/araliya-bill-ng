import { NgModule } from '@angular/core';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './component/user/user.component';
import {SupplierComponent} from './component/supplier/supplier.component';
import {SupplierDetailsComponent} from './component/supplier-details/supplier-details.component';
import {InvoiceComponent} from './component/invoice/invoice.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'supplier', component: SupplierComponent},
      {path: 'supplier/:supplier_id', component: SupplierDetailsComponent},
      {path: 'supplier/:supplier_id/invoice/:invoice_id', component: InvoiceComponent},
      {path: 'user', component: UserComponent},
      // {path: 'user/:id', component: UserdetailComponent},
      // {path: 'expense', component: ExpanceComponent}
    ]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
