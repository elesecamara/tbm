import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SolucionesComponent } from './pages/soluciones/soluciones.component';
import { TescoComponent } from './pages/tesco/tesco.component';

import { ContactoComponent } from './pages/contacto/contacto.component';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';

// Exporta constantes de rutas para usar en toda la aplicación
export const APP_ROUTES = {
  HOME: '',
  ESPECIALIDAD: 'especialidad',
  SOLUCIONES: 'soluciones',
  TESCO: 'tesco',
  COMPLEMENTOS: 'complementos',
  CONTACTO: 'contacto'
} as const;

// Exporta el tipo para TypeScript
export type AppRoute = keyof typeof APP_ROUTES;

// Configuración de rutas de Angular (usa las constantes)
export const routes: Routes = [
  { path: APP_ROUTES.HOME, component: HomeComponent, title: 'Inicio | TBM' },
  { path: APP_ROUTES.ESPECIALIDAD, component: EspecialidadComponent, title: 'Nuestra Especialidad | TBM' },
  { path: APP_ROUTES.SOLUCIONES, component: SolucionesComponent, title: 'Nuestras Soluciones | TBM' },
  { path: APP_ROUTES.TESCO, component: TescoComponent, title: 'Tesco | TBM' },

  { path: APP_ROUTES.CONTACTO, component: ContactoComponent, title: 'Contacto | TBM' },
  { path: '**', redirectTo: APP_ROUTES.HOME }
];
