import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaModel } from '../model/CategoriaModel';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private http: HttpClient) { }
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }
  getAllCategorias() {
    return this.http.get('http://localhost:8080/pesquisa-hospitais', this.token)
  }
  getByIdCategoria(id: number){
    return this.http.get(`http://localhost:8080/pesquisa-hospitais/${id}`,this.token)
  }
 
  postCategoria(categoria: CategoriaModel){
    return this.http.post('http://localhost:8080/pespecialidades', categoria, this.token)
  }

  
  
  
}