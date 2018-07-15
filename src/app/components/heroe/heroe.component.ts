import { Component, OnInit } from '@angular/core';
// Para coger el parámetro que viene en la URL se debe importar
import { ActivatedRoute } from '@angular/router';

// Se importa el servicio para poder tener los datos
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  // Se crea una variable para el heroe
  heroe: any = {};

  // Se pasa como parámetro el activatedRoute
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
  }

  ngOnInit() {
    /* Params regresa un observador, que está pendiente de los cambios y para que funcione se necesita
    suscribirse a ese observador*/
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

}
