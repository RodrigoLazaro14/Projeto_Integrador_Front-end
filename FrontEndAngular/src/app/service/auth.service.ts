import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogin: UserLogin = new UserLogin()

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin) {
    return this.http.post('http://localhost:8080/usuarios/logar', userLogin)
  }

  logarHospital(hospitalLogin: UserLogin) {
    return this.http.post('http://localhost:8080/hospitais/logar', hospitalLogin)
  }

  cadastrar(user:User) {
    return this.http.post('http://localhost:8080/usuarios/cadastrar%27', User)
  }

  btnSair() {
    let ok = false
    let token = localStorage.getItem('token')

    if (token != null) {
      ok = true
    }
  }

  btnLogin() {
    let ok = false
    let token = localStorage.getItem('token')

    if (token == null) {
      ok = true
  }

  return ok
  }

}
