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
  //-------------
  hospitalLista = [];
  //-------------
  key = 'data'
  reverse = true


  categoria: CategoriaModel = new CategoriaModel()
  listaCategoria: CategoriaModel[]
  
  hospital: HospitalModel = new HospitalModel()
  listaHospitais: HospitalModel[]
  idHospital: number

  constructor(
    private hospitalService: HospitalService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    //---------------
    this.hospitalService.listar().subscribe(
      resp => {
        this.hospitalLista = resp;
      }
    )
    //---------------
    window.scroll(0,0)
    this.findAllHospitais()
    this.findAllCategorias()
  }
   
   
  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp:CategoriaModel[])=>{
      this.listaCategoria=resp
    })
  }
  findAllHospitais(){
    this.hospitalService.getAllHospitais().subscribe((resp:HospitalModel[])=>{
      this.listaHospitais=resp
    })
  }
  findByIdTema(){
    this.hospitalService.getByIdHospital(this.idHospital).subscribe((resp:HospitalModel)=>{
      this.hospital=resp
    })
  }
}