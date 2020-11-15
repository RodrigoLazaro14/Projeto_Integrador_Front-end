import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HospitalModel } from '../model/HospitalModel';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }


  getAllHospitais() {
    return this.http.get('http://localhost:8080/pesquisa-hospitais', this.token)
  }

  getByIdHospital(id: number) {
    return this.http.get(`http://localhost:8080/pesquisa-hospitais/${id}`, this.token)
  }


  getByNomeHospital(nome: string) {
    return this.http.get(`http://localhost:8080/pesquisa-hospitais/nome/${nome}`, this.token)
  }


}
