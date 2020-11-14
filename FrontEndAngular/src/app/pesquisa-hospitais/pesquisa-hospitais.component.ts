import { Component, OnInit } from '@angular/core';
import { HospitalModel } from '../model/HospitalModel';
import { CategoriaModel } from '../model/CategoriaModel';
import { HospitalService } from '../service/hospital.service';
import { CategoriaService } from '../service/categoria.service';
 

 
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
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