import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Input le va a decir a Angular que una propiedad que yo quiero, va a venir de fuera (viene del componente padre)
// Output le va a decir a Angular que una propiedad se va a mandar a fuera (va al componente padre). Output va de la mano con EventEmitter

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

  // Nombre del evento del padre q está escuchando. Va a emitir un number
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  // Función para ver mas info del heroe
  verHeroe() {
    // console.log(this.idx);
    this.router.navigate(['/heroe', this.idx]);
    // Con emit() se va a emitir el index del heroe
    // this.heroeSeleccionado.emit(this.idx);
  }
}


