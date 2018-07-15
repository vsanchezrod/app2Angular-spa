import { Component, OnInit } from '@angular/core';
// Se tiene que importar el servicio que vaya a usar el componente y la interfaz
import { HeroesService, Heroe } from '../../services/heroes.service';
// Para poder redirigir a la web heroe con el botón
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  // Creo variable
  heroes: Heroe[] = [];

  // Se añade al constructor el servicio
  constructor(private _heroesService: HeroesService,
              private router: Router) {
  }

  // Primero se ejecuta el constructor y cuando la pag está renderizada el ngOnInit
  ngOnInit() {

    // Rescato los datos
    this.heroes = this._heroesService.getHeroes();
  }

  // Método verHeroe(id)
  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
