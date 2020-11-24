import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SobrenosComponent} from './sobrenos/sobrenos.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroHospitalComponent } from './cadastro-hospital/cadastro-hospital.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { DirecionamentoComponent } from './direcionamento/direcionamento.component';
import { PerguntasFrequentesComponent } from './perguntas-frequentes/perguntas-frequentes.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { EntrarComponent } from './entrar/entrar.component';
import { ListaHospitaisComponent } from './lista-hospitais/lista-hospitais.component';
import { LoginHospitalComponent } from './login-hospital/login-hospital.component';
import { PesquisaHospitaisComponent } from './pesquisa-hospitais/pesquisa-hospitais.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobrenos', component: SobrenosComponent },
  { path: 'logar', component: LoginComponent },
  { path: 'logar-hospital', component: LoginHospitalComponent },
  { path: 'cadastrar', component: CadastroComponent },
  { path: 'cadastroHospital', component: CadastroHospitalComponent },
  { path: 'especialidades', component: EspecialidadesComponent },
  { path: 'perguntasFrequentes', component: PerguntasFrequentesComponent },
  { path: 'politicaPrivacidade', component: PoliticaPrivacidadeComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'lista-hospitais', component: ListaHospitaisComponent },
  { path: 'pesquisa-hospitais', component: PesquisaHospitaisComponent},
  { path: 'delete-categoria/:id', component: DeleteCategoriaComponent},
  { path: 'put-categoria/:id', component: PutCategoriaComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
