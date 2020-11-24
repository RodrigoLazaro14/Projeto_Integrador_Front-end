import { Component, OnInit } from '@angular/core';
import { HospitalModel } from '../model/HospitalModel';
import { CategoriaModel } from '../model/CategoriaModel';
import { HospitalService } from '../service/hospital.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-pesquisa-hospitais',
  templateUrl: './pesquisa-hospitais.component.html',
  styleUrls: ['./pesquisa-hospitais.component.css']
})
export class PesquisaHospitaisComponent implements OnInit {
  
  hospitalLista = [];

  idCategoria: number
  nomeCategoria: string
  categoria: CategoriaModel = new CategoriaModel()
  listaCategoria: CategoriaModel[]


  hospital: HospitalModel = new HospitalModel()
  listaHospitais: HospitalModel[]
  idHospital: number
  nomeHospital: string
  enderecoHospital: string

  constructor(
    private hospitalService: HospitalService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {

    this.hospitalService.listar().subscribe(
      resp => {
        this.hospitalLista = resp;
      })

    window.scroll(0, 0)
    this.findAllHospitais()
    this.findAllCategorias()
  }


  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: CategoriaModel[]) => {
      this.listaCategoria = resp
    })
  }




  findAllHospitais() {
    this.hospitalService.getAllHospitais().subscribe((resp: HospitalModel[]) => {
      this.listaHospitais = resp
    })
  }



  findByIdHospital() {
    this.hospitalService.getByIdHospital(this.idHospital).subscribe((resp: HospitalModel) => {
      this.hospital = resp
    })
  }


findByNomeHospital() {
   if (this.nomeHospital === 'ver todos'){
     this.findAllHospitais()
   } else {
     this.hospitalService.getByNomeHospital(this.nomeHospital).subscribe((resp: HospitalModel[]) => {
       this.listaHospitais = resp
     })
   }
 }


  findByNomeCategoria() {

    this.categoriaService.getByNomeCategoria(this.nomeCategoria).subscribe((resp: CategoriaModel) => {
      this.categoria = resp

    })
  }



  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
    })
  }





}