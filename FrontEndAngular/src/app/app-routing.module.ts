import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SobrenosComponent} from './sobrenos/sobrenos.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroHospitalComponent } from './cadastro-hospital/cadastro-hospital.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'sobrenos', component: SobrenosComponent},
  {path:'logar', component:LoginComponent },
  {path:'cadastrar', component:CadastroComponent },
  {path:'cadastroHospital', component:CadastroHospitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
