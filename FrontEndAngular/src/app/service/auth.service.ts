import {Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';
import { HospitalModel } from '../model/HospitalModel';
import { EspecialidadesComponent } from '../especialidades/especialidades.component';
 
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
  
  cadastrar(user:User){
    return this.http.post('http://localhost:8080/usuarios/cadastrar',user)
  }

  cadastrarHospital(cadastroHospital: HospitalModel){
    return this.http.post('http://localhost:8080/hospitais/cadastrar', cadastroHospital)
  }

  
  btnSair() {
    let ok = false
    let tokenUsuarioLogin = localStorage.getItem('tokenUsuarioLogin')

    if (tokenUsuarioLogin != null) {
      ok = true
    }
    return ok
  }

  btnLogin() {
    let ok = false
    let tokenUsuarioLogin = localStorage.getItem('tokenUsuarioLogin')

    if (tokenUsuarioLogin == null) {
      ok = true
  }

  return ok
  }
 
  fisica() {
    let ok = false
    let tokenUsuarioLogin = localStorage.getItem('tokenUsuarioLogin')
    if(this.userLogin.tipoPessoa == 1 && tokenUsuarioLogin != null){
      ok = true
    } 
    return ok
  }

  juridica() {
    let ok = false
    let tokenUsuarioLogin = localStorage.getItem('tokenUsuarioLogin')
    if(this.userLogin.tipoPessoa == 2 && tokenUsuarioLogin != null){
      ok = true
    } 
    return ok
  }

}