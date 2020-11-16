import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalModel } from '../model/HospitalModel';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-hospital',
  templateUrl: './login-hospital.component.html',
  styleUrls: ['./login-hospital.component.css']
})
export class LoginHospitalComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  hospitalLogin: UserLogin = new UserLogin()
  userHospital: HospitalModel = new HospitalModel()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
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
