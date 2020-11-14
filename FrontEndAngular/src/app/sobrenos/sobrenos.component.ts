import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobrenos',
  templateUrl: './sobrenos.component.html',
  styleUrls: ['./sobrenos.component.css']
})
export class SobrenosComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

}
