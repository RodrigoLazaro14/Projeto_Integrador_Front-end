import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaModel } from '../model/CategoriaModel';
import { HospitalModel } from '../model/HospitalModel';
// import { CategoriaModel } from '../model/CategoriaModel';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private http: HttpClient) { }
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }
  getAllCategorias() {
    return this.http.get('http://localhost:8080/categoria', this.token)
  }

  listarCategoria(){
    return this.http.get<any>('http://localhost:8080/categoria');
  }

  getByIdCategoria(id: number){
    return this.http.get(`http://localhost:8080/categoria/${id}`,this.token)
  }

  postCategoria(categoria: CategoriaModel){
    return this.http.post('http://localhost:8080/categoria', categoria, this.token)
  }

  getByNomeCategoria(nome: string){
  return this.http.get('http://localhost:8080/pesquisa-hospitais', this.token)

  }

  putCatgoria(categoria: CategoriaModel){
    return this.http.put('http://localhost:8080/categoria', categoria, this.token)
  }

}