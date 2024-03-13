import { routes } from './../../../../app.routes';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'pilian-acessar-conta',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './acessar-conta.component.html',
  styleUrl: './acessar-conta.component.scss'
})
export class AcessarContaComponent {
  
  constructor(private router: Router) { }

  criarConta(){
    this.router.navigate(['/criar-conta']);
  }
}
