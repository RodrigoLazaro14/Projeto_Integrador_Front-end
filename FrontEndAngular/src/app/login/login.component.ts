import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalModel } from '../model/HospitalModel';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  hospitalLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      this.authService.userLogin = this.userLogin;
      localStorage.setItem('tokenUsuarioLogin', this.userLogin.tokenUsuarioLogin)
      console.log(JSON.stringify(this.userLogin));    
      this.router.navigate(['/home'])
    });
    
  }
}