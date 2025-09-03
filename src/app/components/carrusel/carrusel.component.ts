// carrusel.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate, query } from '@angular/animations';
import { CommonModule } from '@angular/common';

interface CarruselItem {
  id: number;
  background: string;
  texto: string;
  imagen: string;
}

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment, :decrement', [
        // Fade out del contenido actual
        query(':leave', [
          style({ opacity: 1 }),
          animate('300ms ease-out', style({ opacity: 0 }))
        ], { optional: true }),
        
        // Fade in del nuevo contenido con diferentes delays
        query(':enter', [
          style({ opacity: 0 })
        ], { optional: true }),
        
        // Animación específica para la imagen (crece de abajo hacia arriba)
        query(':enter .carruselDer img', [
          style({ 
            transform: 'scaleY(0)', 
            'transform-origin': 'bottom' 
          }),
          animate('500ms 300ms ease-out', style({ 
            transform: 'scaleY(1)'
          }))
        ], { optional: true }),
        
        // Animación para el texto (fade in)
        query(':enter .carruselDer h2', [
          style({ opacity: 0 }),
          animate('500ms 600ms ease-out', style({ opacity: 1 }))
        ], { optional: true }),
        
        // Animación general de fade in
        query(':enter', [
          animate('800ms 900ms ease-out', style({ opacity: 1 }))
        ], { optional: true })
      ])
    ])
  ]
})
export class CarruselComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  private intervalId: any;

  carruselItems: CarruselItem[] = [
    {
      id: 1,
      background: '/assets/img/carrusel/crecer.jpg',
      texto: 'Necesito optimizar y crecer...',
      imagen: '/assets/img/carrusel/crecer.png'
    },
    {
      id: 2,
      background: '/assets/img/carrusel/empezando.jpg',
      texto: 'Estoy comenzando...',
      imagen: '/assets/img/carrusel/empezando.png'
    },
    {
      id: 3,
      background: '/assets/img/carrusel/futuro.jpg',
      texto: 'Deseo automatizar procesos...',
      imagen: '/assets/img/carrusel/futuro.png'
    }
  ];

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 6000);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.carruselItems.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.carruselItems.length) % this.carruselItems.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }

  get currentItem(): CarruselItem {
    return this.carruselItems[this.currentIndex];
  }
}