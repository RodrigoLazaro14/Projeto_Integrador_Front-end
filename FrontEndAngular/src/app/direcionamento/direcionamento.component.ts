import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-direcionamento',
  templateUrl: './direcionamento.component.html',
  styleUrls: ['./direcionamento.component.css']
})
export class DirecionamentoComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      localStorage.setItem('tokenUsuarioLogin', this.userLogin.tokenUsuarioLogin)
      this.router.navigate(['/home'])
    })
  }
}