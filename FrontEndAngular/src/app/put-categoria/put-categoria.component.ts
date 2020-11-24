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
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.idCategoria = this.route.snapshot.params["id"]
    this.findByIdCategoria(this.idCategoria)


    this.findAllHospital()
  }

  findByIdCategoria(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
    })
  }

  salvar(){
    this.hospital.idHospital = this.idHospital
    this.categoria.hospital = this.hospital

    this.categoriaService.putCategoria(this.categoria).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
      this.router.navigate(['/especialidades'])
      this.alert.showAlertSuccess('Especialidade alterada com sucesso')
    }, err => {
      if (err.status == '500'){
        this.alert.showAlertDanger('Preencha todos os campos corretamente antes de enviar!')                    
      }
    })
  }

  findAllHospital() {
    this.hospitalService.getAllHospitais().subscribe((resp: HospitalModel[]) => {
      this.listaHospitais = resp
    })
  }

 findByIdHospital() {
   this.hospitalService.getByIdHospital(this.idHospital).subscribe((resp: HospitalModel) => {
     this.hospital = resp;
   })
 }

}