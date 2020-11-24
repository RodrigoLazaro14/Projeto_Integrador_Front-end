import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from '../model/CategoriaModel';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.css']
})
export class DeleteCategoriaComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel()

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    
    let id: number = this.route.snapshot.params['id']
    this.findByIdCategoria(id)
  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
    })
  }
  
  btnSim(){
    this.categoriaService.deleteCategoria(this.categoria.idCategoria).subscribe(() => {
      this.router.navigate(['/especialidades'])
      alert('Especialidade apagada com sucesso!')
    })
  }

  btnNao(){
    this.router.navigate(['/especialidades'])
  }

}
