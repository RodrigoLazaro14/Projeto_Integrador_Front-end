import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroHospitalComponent } from './cadastro-hospital/cadastro-hospital.component';
import { ModalModule } from 'ngx-bootstrap/modal'

import { DirecionamentoComponent } from './direcionamento/direcionamento.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { PerguntasFrequentesComponent } from './perguntas-frequentes/perguntas-frequentes.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { EntrarComponent } from './entrar/entrar.component';
import { ListaHospitaisComponent } from './lista-hospitais/lista-hospitais.component';
import { LoginHospitalComponent } from './login-hospital/login-hospital.component';
import { PesquisaHospitaisComponent } from './pesquisa-hospitais/pesquisa-hospitais.component';
import { AlertasComponent } from './alertas/alertas.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CadastroComponent,
    SobrenosComponent,
    CadastroHospitalComponent,
    DirecionamentoComponent,
    EspecialidadesComponent,
    PerguntasFrequentesComponent,
    PoliticaPrivacidadeComponent,
    EntrarComponent,
    ListaHospitaisComponent,
    LoginHospitalComponent,
    PesquisaHospitaisComponent,
    AlertasComponent,
    PutCategoriaComponent,
    DeleteCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
    // ,PesquisaHospitaisComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }