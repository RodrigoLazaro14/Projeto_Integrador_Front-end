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

  newhosp: CategoriaModel = new CategoriaModel()
  listaHospital: HospitalModel[]
  idHospital: number
  nomeHospital: string

  constructor(
    private hospitalService: HospitalService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit() {

  }
  publicarEspecialidades() {
    this.newhosp.idCategoria = this.idHospital
    this.categoria.idCategoria = this.idHospital
    if(this.categoria.nomeCategoria == null || this.categoria.precoCategoria == null) {
      alert('Preencha todos os campos!')
    }else
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
      this.categoria = new CategoriaModel()
      alert('Especialidade cadastrada com sucesso!')
    })
    }
}