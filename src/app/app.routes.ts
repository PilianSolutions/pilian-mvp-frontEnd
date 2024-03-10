import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
