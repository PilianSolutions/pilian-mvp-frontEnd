import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-criar-conta',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './criar-conta.component.html',
  styleUrl: './criar-conta.component.scss'
})
export class CriarContaComponent {

  constructor(private router: Router) { }

  acessarConta(){
    this.router.navigate(['/']);
  }

}
