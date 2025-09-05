// src/app/pages/home/home.component.ts
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from '../../app.routes';
import { SeoService } from '../../services/seo.service';
import { CarruselComponent } from "../../components/carrusel/carrusel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CarruselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly ROUTES = APP_ROUTES;
  heroContents = [
    {
      heroTitle: "BANDAS DE TRANSMISIÓN Y TRANSPORTE",
      heroDescription: "Potencia tu producción con bandas que no solo mueven carga, optimizan tu operación.",
      buttonText: "Cotizar",
      backgroundImage: "/assets/img/banda.gif",
      imageTitle: "BANDAS DE TRANSPORTE",
      seoDescription: "BANDAS PLANAS DE TRANSMISIÓN Y TRANSPORTE:"
    },
    {
      heroTitle: "BANDAS INDUSTRIALES", 
      heroDescription: "Descripción del segundo contenido heroico.",
      buttonText: "Cotizar",
      backgroundImage: "/assets/img/home2.jpg",
      imageTitle: "Precisión en cada giro, durabilidad en cada operación.",
      seoDescription: "Descripción SEO para la segunda slide - Palabras clave relevantes"
    }
  ];

  bandas = [
    {
      "name": "BANDA MIL SUPER TORQUE",
      "value": "S3M,S5M,S8M,S14M"
    },
    {
      "name": "BANDA REDONDA",
      "value": "Verde y naranja."
    },
    {
      "name": "BANDA SINCRÓNICA",
      "value": "MXL,XL,L,H,XH,XXH"
    },
    {
      "name": "BANDA SINCRÓNICA MILIMETRICA",
      "value": "3M,5M,8M,14M,D5M,D8M,D14"
    },
    {
      "name": "BANDA SINCRÓNICA POLIURETANO",
      "value": "T2.5, T5, T10, T20, AT5, AT10, AT20"
    },
    {
      "name": "BANDAS CLÁSICAS",
      "value": "A,B,C,D,E.AX,BX,CX"
    },
    {
      "name": "BANDAS DOBLE",
      "value": "V AA,BB,CC"
    },
    {
      "name": "BANDAS ESPECIALES",
      "value": "Perforaciones o diseños."
    },
    {
      "name": "BANDAS MILIMÉTRICAS",
      "value": "SPZ,SPA,SPB,SPC (Y DENTADAS)"
    },
    {
      "name": "BANDAS MULTIPLES",
      "value": "RA,RB,RC.RD,R3V,R5V,R8V"
    },
    {
      "name": "BANDAS MULTIRIB",
      "value": "J,L,K,M"
    },
    {
      "name": "BANDAS PLANAS DE TRANSMISIÓN Y TRANSPORTE",
      "value": "PU, PVC, Nitrilo."
    },
    {
      "name": "BANDAS VELOCIDAD VARIABLE",
      "value": ""
    },
    {
      "name": "DOBLE DENTADAS",
      "value": "DXL, DL, DH"
    },
    {
      "name": "RECUBRIMIENTOS",
      "value": "Rojo, Ambar, Negro de esponja."
    },
    {
      "name": "TRANSMISIÓN DE POTENCIA",
      "value": "HULE+ POLIAMIDA, Tangenciales."
    }
  ];

  heroTitle: string = '';
  heroDescription: string = '';
  buttonText: string = '';
  currentBackgroundImage: string = '';
  imageTitle: string = '';

  private currentIndex: number = 0;
  private intervalId: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    // Configurar SEO inicial
    this.setSeoTags();
    
    this.updateContent();
    
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.nextContent();
        this.setSeoTags(); // Actualizar SEO con cada cambio
      }, 10000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private nextContent(): void {
    this.currentIndex = (this.currentIndex + 1) % this.heroContents.length;
    this.updateContent();
  }
  changeContent(index: number): void {
    this.currentIndex = index;
    this.updateContent();
    
    // Reiniciar el intervalo
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      this.nextContent();
    }, 10000);
  }
  private updateContent(): void {
    const currentContent = this.heroContents[this.currentIndex];
    this.heroTitle = currentContent.heroTitle;
    this.heroDescription = currentContent.heroDescription;
    this.buttonText = currentContent.buttonText;
    this.currentBackgroundImage = currentContent.backgroundImage;
    this.imageTitle = currentContent.imageTitle;
  }

  private setSeoTags(): void {
    const currentContent = this.heroContents[this.currentIndex];
    
    this.seoService.setMetaTags({
      title: currentContent.heroTitle,
      description: currentContent.seoDescription,
      keywords: 'palabra1, palabra2, palabra3',
      image: currentContent.backgroundImage,
      type: 'website'
    });
  }
}