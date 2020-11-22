import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User()
  senha: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertasService
    
  ) { }

 

  ngOnInit() {
    window.scroll(0,0)
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  cadastrar() {
    if ( this.user.senhaUsuarioModel === this.senha ) {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/logar'])
        this.alerta.showAlertSuccess('Usuário cadastrado com sucesso!')
      })
    } else {
        this.alerta.showAlertDanger('Suas senhas não conferem')
    }
  }

}