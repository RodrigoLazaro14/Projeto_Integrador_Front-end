import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../service/hospital.service';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaModel } from '../model/CategoriaModel';
import { HospitalModel } from '../model/HospitalModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel()
  listaCategoria: CategoriaModel[]
  titulo: string

  hospital: HospitalModel = new HospitalModel()
  listaHospital: HospitalModel[]
  idHospitais: number
  nomeHospital: string

  constructor(
    private hospitalService: HospitalService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit() {
window.scroll(0,0)
this.findAllCategoria()
  }
  publicarEspecialidades() {
    this.hospital.idHospital = this.idHospitais
    this.hospital.categoria.push (this.categoria)

    if(this.categoria.nomeCategoria == null || this.categoria.descricaoCategoria == null || this.categoria.precoCategoria == null){
        alert('Preencha todos os campos antes de inserir!')
    } else{
        this.categoriaService.postCategoria(this.hospital).subscribe((resp: CategoriaModel) => {
    this.categoria = resp
    this.categoria = new CategoriaModel()
    alert('Especialidade inserida com sucesso!')
})
    this.findAllCategoria()
    }
}

findAllCategoria(){
  this.categoriaService.getAllCategorias().subscribe((resp: CategoriaModel[]) =>{
  this.listaCategoria = resp
})
}

findByIdHospital(){
  this.hospitalService.getByIdHospital2(this.idHospitais).subscribe((resp: HospitalModel) => {
  this.hospital = resp
})
}
}