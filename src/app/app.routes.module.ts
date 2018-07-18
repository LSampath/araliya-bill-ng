import { NgModule } from '@angular/core';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './component/user/user.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      // {path: 'invoice', component: InvoiceComponent},
      // {path: 'invoice/:no', component: InvoicedetailComponent},
      // {path: 'statistic', component: StaticsComponent},
      // {path: 'supplier', component: SupplierComponent},
      {path: 'user', component: UserComponent},
      // {path: 'user/:id', component: UserdetailComponent},
      // {path: 'expense', component: ExpanceComponent}
    ]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
