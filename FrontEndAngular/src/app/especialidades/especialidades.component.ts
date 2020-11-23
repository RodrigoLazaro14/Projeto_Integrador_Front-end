import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../service/hospital.service';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaModel } from '../model/CategoriaModel';
import { HospitalModel } from '../model/HospitalModel';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

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
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.findAllCategoria()
    this.findAllHospitais()

    this.categoriaService.listarCategoria().subscribe(
      resp => {
        this.listaCategoria = resp;
      })
  }

  publicar() {
    this.hospital.idHospital = this.idHospitais;
   // this.hospital.categorias.push(this.categoria);
    this.categoria.hospital = this.hospital; 

    if (this.categoria.nomeCategoria == null || this.categoria.descricaoCategoria == null || this.categoria.precoCategoria == null || this.categoria.hospital == null) {
      this.alerta.showAlertDanger('Preencha todos os campos antes de inserir!')
    }else if (this.categoria.descricaoCategoria.length < 10) {
      this.alerta.showAlertDanger('Digite no minimo 10 caracteres no campo texto!')
    } else {
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: CategoriaModel) => {
        this.categoria = resp;
        this.categoria = new CategoriaModel();
        this.alerta.showAlertSuccess('Especialidade inserida com sucesso!');
      //this.categoriaService.listarCategoria();
        this.findAllCategoria()
      })

    }
  }

/*
  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    if (this.postagem.titulo == null || this.postagem.texto == null || this.postagem.tema == null) {
      this.alerta.showAlertDanger('Preencha todos os campos antes de publicar!')
    } else if (this.postagem.texto.length < 10) {
      this.alerta.showAlertDanger('Digite no minimo 10 caracteres no campo texto!')
    } else{
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        this.postagem = new Postagem()
        this.alerta.showAlertSuccess('Postagem realizada com sucesso!')
        this.findAllPostagens()
      })
    }
  }
*/
  findAllCategoria() {
    this.categoriaService.getAllCategorias().subscribe((resp: CategoriaModel[]) => {
      this.listaCategoria = resp
    })
  }

  findAllHospitais(){
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