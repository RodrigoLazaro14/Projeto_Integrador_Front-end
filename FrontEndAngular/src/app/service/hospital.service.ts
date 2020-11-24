import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HospitalModel } from '../model/HospitalModel';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  token = {

    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))

  }

  /*
    getAllTemas() {
    return this.http.get('https://blog-pessoal-generation.herokuapp.com/tema', this.token)
  }
  */
  
  getAllHospitais() {
    return this.http.get('http://localhost:8080/hospitais', this.token)
  }

  getByIdHospital(id: number) {
    return this.http.get(`http://localhost:8080/hospitais/${id}`, this.token)
  }

  getByNomeHospital(nome: string) {

    return this.http.get(`http://localhost:8080/hospitais/hospitais/${nome}`, this.token)
  }

  listar(){
    return this.http.get<any>('http://localhost:8080/hospitais');
  }
  
  getByNomeCategoria(nome: string){
    return this.http.get('http://localhost:8080/pesquisa-hospitais', this.token)
  
  }

  getByIdCategoria(id: number){
    return this.http.get(`http://localhost:8080/pesquisa-hospitais/${id}`,this.token)
  }

  deleteHospital(id: number) {
    return this.http.delete(`http://localhost:8080/especialidades/${id}`, this.token)

  }
}
