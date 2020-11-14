import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../service/hospital.service';

@Component({
  selector: 'app-lista-hospitais',
  templateUrl: './lista-hospitais.component.html',
  styleUrls: ['./lista-hospitais.component.css']
})
export class ListaHospitaisComponent implements OnInit {

  hospitalLista = [];

  constructor(
    public hospitalService: HospitalService
  ) { }

  ngOnInit() {
    this.hospitalService.listar().subscribe(
      resp => {
        this.hospitalLista = resp;
      }
    )
  }

}
