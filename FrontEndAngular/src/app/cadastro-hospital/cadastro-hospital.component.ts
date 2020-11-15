import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalModel } from '../model/HospitalModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro-hospital',
  templateUrl: './cadastro-hospital.component.html',
  styleUrls: ['./cadastro-hospital.component.css']
})
export class CadastroHospitalComponent implements OnInit {

  user: HospitalModel = new HospitalModel()
  senha: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  cadastrar() {
    if ( this.user.senhaHospital === this.senha ) {
      this.authService.cadastrarHospital(this.user).subscribe((resp: HospitalModel) => {
        this.user = resp
        this.router.navigate(['/logar-hospital'])
        alert('Usuário cadastrado com sucesso!')
      })
    } else {
        alert('Suas senhas não conferem')
    }
  }
  

}