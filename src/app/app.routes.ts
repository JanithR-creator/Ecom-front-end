import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {ProductComponent} from "./components/product/product.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductComponent},
];
