import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from '../../app.routes';
import { SeoService } from '../../services/seo.service';


interface Producto {
  id: string;
  imagen: string;
  titulo: {
    es: string;
    en: string;
  };
}


@Component({
  selector: 'app-soluciones',
  imports: [ FormsModule, CommonModule, RouterModule],
  templateUrl: './soluciones.component.html',
  styleUrl: './soluciones.component.css'
})
export class SolucionesComponent {
  readonly ROUTES = APP_ROUTES;
  idioma: 'es' | 'en' = 'es';
  terminoBusqueda: string = '';
  
  productos: Producto[] = [
    { id: '1', imagen: '+PU.jpeg', titulo: { es: '+PU', en: '+PU' } },
    { id: '2', imagen: '3L-4L-5L-lawn-and-garden-v-belt.png', titulo: { es: 'Bandas / Correas  en V 3L 4L 5L para jardín y césped', en: '3L 4L 5L lawn and garden v belt' } },
    { id: '3', imagen: 'agricultural-HB.png', titulo: { es: 'Bandas / Correas  agrícola HB', en: 'agricultural HB' } },
    { id: '4', imagen: 'agricultural-SB.jpg', titulo: { es: 'Bandas / Correas  agrícola SB', en: 'agricultural SB' } },
    { id: '5', imagen: 'banded-v-belt.jpg', titulo: { es: 'Bandas / Correas  en V bandada', en: 'banded v belt' } },
    { id: '6', imagen: 'CABLE-PULLING-BELT.png', titulo: { es: 'Bandas / Correas  PARA TIRO DE CABLE', en: 'CABLE PULLING BELT' } },
    { id: '7', imagen: 'carding-belt.jpg', titulo: { es: 'Bandas / Correas  de cardado', en: 'carding belt' } },
    { id: '8', imagen: 'cleat.jpg', titulo: { es: 'Listón', en: 'cleat' } },
    { id: '9', imagen: 'double-v-belt.jpg', titulo: { es: 'Bandas / Correas  en V doble', en: 'double v belt' } },
    { id: '10', imagen: 'FLAT-TRANSMISSION-BELT.jpg', titulo: { es: 'Bandas / Correas  PLANA DE TRANSMISIÓN', en: 'FLAT TRANSMISSION BELT' } },
    { id: '11', imagen: 'Glass-Fiber-Conveyor-Belt-steel-pu-open-with-guide-T10K6-4-HTD8MK6-4.png', titulo: { es: 'Bandas / Correas  transportadora de fibra de vidrio con guía', en: 'Glass-Fiber-Conveyor-Belt-steel-pu-open-with-guide-T10K6-4-HTD8MK6-4' } },
    { id: '12', imagen: 'GROOVEHOLE.jpg', titulo: { es: 'RANURA Y AGUJERO', en: 'GROOVEHOLE' } },
    { id: '13', imagen: 'HARVEST-FLAT-BELT.jpg', titulo: { es: 'Bandas / Correas  PLANA PARA COSECHA', en: 'HARVEST FLAT BELT' } },
    { id: '14', imagen: 'NUT-LINK-V-BELT.jpg', titulo: { es: 'Bandas / Correas  EN V CON ENLACE DE TUERCA', en: 'NUT LINK V BELT' } },
    { id: '15', imagen: 'PI-P2-P3-P4.jpg', titulo: { es: 'PI P2 P3 P4', en: 'PI P2 P3 P4' } },
    { id: '16', imagen: 'PK.jpg', titulo: { es: 'PK', en: 'PK' } },
    { id: '17', imagen: 'POLY-V-BELT.jpg', titulo: { es: 'Bandas / Correas  EN V POLI', en: 'POLY V BELT' } },
    { id: '18', imagen: 'POWER-TWIST-V-BELT.jpg', titulo: { es: 'Bandas / Correas  EN V DE TORSION DE POTENCIA', en: 'POWER TWIST V-BELT' } },
    { id: '19', imagen: 'PU-DOUBLE-SIDE-TIMING-BELT.jpg', titulo: { es: 'Bandas / Correas  DE TIEMPO PU DE DOBLE CARA', en: 'PU DOUBLE SIDE TIMING BELT' } },
    { id: '20', imagen: 'PU-round-belt.jpg', titulo: { es: 'Bandas / Correas  redonda PU', en: 'PU round belt' } },
    { id: '21', imagen: 'PU-V-BELT.jpg', titulo: { es: 'Bandas / Correas  en V PU', en: 'PU V BELT' } },
    { id: '22', imagen: 'PVC-CONVEYOR-BELT.jpg', titulo: { es: 'Bandas / Correas  TRANSPORTADORA PVC', en: 'PVC CONVEYOR BELT' } },
    { id: '23', imagen: 'REC-V-BELT.jpg', titulo: { es: 'Bandas / Correas  en V REC', en: 'REC V BELT' } },
    { id: '24', imagen: 'RUBBER-RUBBER-TIMING.jpg', titulo: { es: 'Bandas / Correas  DE TIEMPO DE CAUCHO ', en: 'RUBBER RUBBER TIMING ' } },
    { id: '25', imagen: 'RUBBER-V-BELT-HIGH-QUALITY.jpg', titulo: { es: 'Bandas / Correas  EN V DE CAUCHO DE ALTA CALIDAD', en: 'RUBBER V BELT HIGH QUALITY' } },
    { id: '26', imagen: 'RUBBERV-BELT-STANDARD-QUALITY.jpg', titulo: { es: 'Bandas / Correas  EN V DE CAUCHO DE CALIDAD ESTÁNDAR', en: 'RUBBERV BELT STANDARD QUALITY' } },
    { id: '27', imagen: 'SCOOTER-BELT.jpg', titulo: { es: 'Bandas / Correas  para scooter', en: 'SCOOTER BELT' } },
    { id: '28', imagen: 'SILICON-CONVEYOR-BELT.jpg', titulo: { es: 'Bandas / Correas  TRANSPORTADORA DE SILICONA', en: 'SILICON CONVEYOR BELT' } },
    { id: '29', imagen: 'SUPER-GRIP.jpg', titulo: { es: 'SUPER AGARRE', en: 'SUPER GRIP' } },
    { id: '30', imagen: 'T10-3040.jpg', titulo: { es: 'T10-3040 ', en: 'T10-3040 ' } },
    { id: '31', imagen: 'T10H-UP-TO-420MM-WIDTH.jpg', titulo: { es: 'T10H HASTA 420MM DE ANCHO', en: 'T10H UP TO 420MM WIDTH' } },
    { id: '32', imagen: 'timing-belt-pulley.jpg', titulo: { es: 'Polea para Bandas / Correas  de tiempo', en: 'timing belt pulley' } },
    { id: '33', imagen: 'tracking-timing-belt-NFT.png', titulo: { es: 'Bandas / Correas  de tiempo de seguimiento NFT', en: 'tracking timing belt NFT' } },
    { id: '34', imagen: 'TT5.jpg', titulo: { es: 'TT5', en: 'TT5' } },
    { id: '35', imagen: 'V-BELT-PULLEY.jpg', titulo: { es: 'POLEA PARA Bandas / Correas  EN V', en: 'V BELT PULLEY' } }
  ];

  cambiarIdioma(idioma: 'es' | 'en') {
    this.idioma = idioma;
  }

  get productosFiltrados() {
    if (!this.terminoBusqueda) {
      return this.productos;
    }
    
    const termino = this.terminoBusqueda.toLowerCase();
    return this.productos.filter(producto => 
      producto.titulo[this.idioma].toLowerCase().includes(termino)
    );
  }
  getWhatsappLink(producto: Producto): string {
    const texto = `Hola, me interesa cotizar ${producto.titulo[this.idioma]}`;
    return `https://wa.me/5546010347?text=${encodeURIComponent(texto)}`;
  }
  cotizar(producto: Producto) {
    // Lógica para cotizar el producto
    console.log('Cotizando producto:', producto);
    // Aquí puedes implementar la lógica para redirigir o abrir un modal
  }
}
