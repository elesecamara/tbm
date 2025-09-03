// src/app/services/seo.service.ts
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private siteName = 'TBM';

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {}

  setMetaTags(config: {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
  }) {
    const url = config.url || `https://tu-dominio.com${this.router.url}`;
    const image = config.image || 'https://tu-dominio.com/assets/og-image.jpg';

    // Title tag
    this.title.setTitle(`${config.title} | ${this.siteName}`);

    // Meta tags básicos
    this.meta.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph (Facebook, LinkedIn, WhatsApp)
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });

    // Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    // Canonical URL
    this.meta.updateTag({ rel: 'canonical', href: url });
  }

  // Método para limpiar meta tags al cambiar de página
  clearMetaTags() {
    this.meta.removeTag('name="description"');
    this.meta.removeTag('name="keywords"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:description"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:url"');
    this.meta.removeTag('name="twitter:title"');
    this.meta.removeTag('name="twitter:description"');
    this.meta.removeTag('name="twitter:image"');
  }
}