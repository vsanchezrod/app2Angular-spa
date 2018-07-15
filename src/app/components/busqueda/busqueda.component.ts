import { Component, OnInit } from '@angular/core';

// Importo el servicio HeroesService
import { HeroesService } from '../../services/heroes.service';
// Para coger el parámetro que viene en la URL se debe importar
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})

export class BusquedaComponent implements OnInit {

  // Creo un array vacio de heroes
  heroes: any[] = [];
  termino: string;

  constructor(private _heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // Se recoge el parámetro y se usa suscribe
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }
}
