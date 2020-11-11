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
  userHospital: HospitalModel = new HospitalModel()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
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

  hospitalEntrar() {
    this.authService.logarHospital(this.hospitalLogin).subscribe((resp: UserLogin) => {
      this.hospitalLogin = resp
      this.authService.userLogin = this.hospitalLogin;
      localStorage.setItem('tokenUsuarioLogin', this.hospitalLogin.tokenUsuarioLogin)
      console.log(JSON.stringify(this.hospitalLogin));
      this.router.navigate(['/home'])
    })
  }
}