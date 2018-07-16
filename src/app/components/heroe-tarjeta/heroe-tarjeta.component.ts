import { Component, OnInit, Input } from '@angular/core';
// Input le va a decir a Angular que una propiedad que yo quiero, va a venir de fuera

// Para poder redirigir a la web heroe con el botón
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {

  // Creo una variable con el decorador @Input(), lo que significa que el valor de heroe puede venir de fuera
  @Input() heroe: any = {};
  // Esta es propiedad que se va a recibir desde fuera
  @Input() idx: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Función para ver mas info del heroe
  verHeroe() {
    console.log(this.idx);
    this.router.navigate(['/heroe', this.idx]);
  }
}


