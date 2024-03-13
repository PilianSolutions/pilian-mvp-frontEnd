import { Routes } from '@angular/router';
import { AcessarContaComponent } from './page/login/component/acessar-conta/acessar-conta.component';
import { CriarContaComponent } from './page/login/component/criar-conta/criar-conta.component';

export const routes: Routes = [
  { path: '', component: AcessarContaComponent },
  { path: 'criar-conta', component: CriarContaComponent },
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

];
