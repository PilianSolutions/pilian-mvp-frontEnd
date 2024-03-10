import { Component } from '@angular/core';
import { AcessarContaComponent } from './component/acessar-conta/acessar-conta.component';

@Component({
  selector: 'pilian-login',
  standalone: true,
  imports: [AcessarContaComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
