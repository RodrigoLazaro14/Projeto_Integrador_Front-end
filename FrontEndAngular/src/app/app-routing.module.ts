import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SobrenosComponent} from './sobrenos/sobrenos.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { DirecionamentoComponent } from './direcionamento/direcionamento.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'sobrenos', component: SobrenosComponent},
  {path:'logar', component:LoginComponent },
  {path:'cadastrar', component:CadastroComponent },
  {path:'especialidades', component:EspecialidadesComponent},
  {path: 'direcionamento', component:DirecionamentoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
