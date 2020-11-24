import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from '../model/CategoriaModel';
import { HospitalModel } from '../model/HospitalModel';
import { CategoriaService } from '../service/categoria.service';
import { HospitalService } from '../service/hospital.service';

@Component({
  selector: 'app-put-categoria',
  templateUrl: './put-categoria.component.html',
  styleUrls: ['./put-categoria.component.css']
})
export class PutCategoriaComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel()
  idCate: number

  hospital: HospitalModel = new HospitalModel()
  listaHospital: HospitalModel[]
  idHospitais: number

  constructor(
    private hospitalService: HospitalService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    
    this.idCate = this.route.snapshot.params["id"]
    this.findByIdCategoria(this.idCate)

    this.findAllHospitais()
  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
    })
  }


  salvar(){
    this.hospital.idHospital = this.idHospitais
    this.categoria.hospital = this.hospital

    this.categoriaService.putCatgoria(this.categoria).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
      this.router.navigate(['/especialidades'])
      alert('Especialidade alterada com sucesso!')
    }, err => {
      if(err.status == '500'){
        alert('Preencha todos os campos corretamente antes de salvar as alterações!')
      }
    })
  }

  findAllHospitais() {
    this.hospitalService.getAllHospitais().subscribe((resp: HospitalModel[]) => {
      this.listaHospital = resp
    })
  }

  findByIdHospital() {
    this.hospitalService.getByIdHospital(this.idHospitais).subscribe((resp: HospitalModel) => {
      this.hospital = resp;
    })
  }
}
