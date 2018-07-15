import { Component, OnInit } from '@angular/core';
// Para poder redirigir a la web busqueda con el botón
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Método para redireccionar a la pagina busqueda con el termino de busqueda
   buscarHeroe(termino: string) {
    this.router.navigate(['/busqueda', termino]);
  }

}
