import { Component } from '@angular/core';
import { PRODUCTOS, Producto } from '../../data/productos';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-especialidad',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent {
  productos: Producto[] = PRODUCTOS;
  idioma: 'es' | 'en' = 'es';
  searchTerm = '';
  selectedCategoria = '';

  // 🔎 Filtrar productos por búsqueda + categoría
  get productosFiltrados() {
    return this.productos.filter(p => {
      const textoBusqueda = this.searchTerm.toLowerCase();

      const matchesSearch =
        this.searchTerm === '' ||
        p.nombre[this.idioma].toLowerCase().includes(textoBusqueda) ||
        Object.values(p.detalles)
          .filter(val => typeof val === 'string')
          .some(val => (val as string).toLowerCase().includes(textoBusqueda));

      const matchesCategoria =
        this.selectedCategoria === '' ||
        (p.categoria && p.categoria === this.selectedCategoria);

      return matchesSearch && matchesCategoria;
    });
  }

  // 📂 Obtener categorías únicas
  get categorias() {
    return [...new Set(this.productos.map(p => p.categoria).filter(c => c))];
  }
  
  getWhatsappLink(producto: Producto): string {
    const texto = `Hola, me interesa cotizar ${producto.nombre[this.idioma]}`;
    return `https://wa.me/5546010347?text=${encodeURIComponent(texto)}`;
  }
  cambiarIdioma() {
    this.idioma = this.idioma === 'es' ? 'en' : 'es';
  }
    // 🖼️ Imagen fallback si no carga
  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = '/assets/img/logo.svg';
  }
}

