import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: Userlogin) {
    return this.http.post('http://localhost:9000/usuarios/logar', userLogin)
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
