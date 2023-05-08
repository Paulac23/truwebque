import { Component } from '@angular/core';

@Component({
  selector:'app-carrusel-component',
  templateUrl: './carrusel-component.component.html',
  styleUrls: ['./carrusel-component.component.css']
})
export class CarruselComponentComponent {
  images = [
    { src: '../../../assets/LOGO.png', alt: 'Imagen 1' },
    { src: '../../../assets/ECONOMIA.png', alt: 'Imagen 2' },
    { src: '../../../assets/INTERCAMBIO.png', alt: 'Imagen 3' }
  ];

}

