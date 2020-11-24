import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../model/CategoriaModel';
import { HospitalModel } from '../model/HospitalModel';
import { CategoriaService } from '../service/categoria.service';
import { HospitalService } from '../service/hospital.service';

@Component({
  selector: 'app-lista-hospitais',
  templateUrl: './lista-hospitais.component.html',
  styleUrls: ['./lista-hospitais.component.css']
})
export class ListaHospitaisComponent implements OnInit {

  hospitalLista = [];
  listaCategoria: CategoriaModel[]
  hospital: HospitalModel = new HospitalModel()


  constructor(
    public hospitalService: HospitalService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.hospitalService.listar().subscribe(
      resp => {
        this.hospitalLista = resp;
      })


      this.findAllCategorias()
  }


  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: CategoriaModel[]) => {
      this.listaCategoria = resp
    })
  }

}
