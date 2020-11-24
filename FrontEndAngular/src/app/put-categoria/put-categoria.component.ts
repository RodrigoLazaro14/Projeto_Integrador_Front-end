import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from '../model/CategoriaModel';
import { HospitalModel } from '../model/HospitalModel';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { HospitalService } from '../service/hospital.service';

@Component({
  selector: 'app-put-categoria',
  templateUrl: './put-categoria.component.html',
  styleUrls: ['./put-categoria.component.css']
})
export class PutCategoriaComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel()
  idCategoria: number

  hospital: HospitalModel = new HospitalModel()
  listaHospitais: HospitalModel[]
  idHospital: number

  constructor(
    private hospitalService: HospitalService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idCategoria = this.route.snapshot.params["id"]
    this.findByIdCategoria(this.idCategoria)
    this.findAllHospitais()
  }

  findByIdCategoria(idCategoria: number) {
    this.categoriaService.getByIdCategoria(idCategoria).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
    })
  }

  salvar() {   
    

    this.categoriaService.putCategoria(this.categoria).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
      this.router.navigate(['/home'])
      alert('Categoria alterada com sucesso')
    }, err => {  //Tratativa de erros.
      if(err.status == '500'){
        alert('Preencha todos os campos corretamente, antes de enviar!')
      }
    })
  }

  findAllHospitais(){
    this.hospitalService.getAllHospitais().subscribe((resp:HospitalModel[])=>{
      this.listaHospitais=resp
    })
  }
  findByIdHospital(){
    this.hospitalService.getByIdHospital(this.idHospital).subscribe((resp:HospitalModel)=>{
      this.hospital=resp
    })
  }
  
}