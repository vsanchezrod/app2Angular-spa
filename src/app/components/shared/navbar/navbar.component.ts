import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Crear método para buscar heroe
  buscarHeroe(termino: string) {
    console.log(termino);
  }
}
