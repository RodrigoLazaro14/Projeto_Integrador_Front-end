import {Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin) {
    return this.http.post('http://localhost:8080/usuarios/logar', userLogin)
  }
  


  btnSair() {
    let ok = false
    let tokenUsuarioLogin = localStorage.getItem('tokenUsuarioLogin')

    if (tokenUsuarioLogin != null) {
      ok = true
    }
  }

  btnLogin() {
    let ok = false
    let tokenUsuarioLogin = localStorage.getItem('tokenUsuarioLogin')

    if (tokenUsuarioLogin == null) {
      ok = true
  }

  return ok
  }

}
