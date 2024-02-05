import { Routes } from '@angular/router';
import { FichaInicioComponent } from '../components/ficha-inicio/ficha-inicio.component';
import { FichaProductosComponent } from '../components/ficha-productos/ficha-productos.component';
import { FichaServiciosComponent } from '../components/ficha-servicios/ficha-servicios.component';
import { FichaContactosComponent } from '../components/ficha-contactos/ficha-contactos.component';
import { FichaErrorComponent } from '../components/ficha-error/ficha-error.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: FichaInicioComponent },
    { path: 'productos', component: FichaProductosComponent },
    { path: 'servicios', component: FichaServiciosComponent },
    { path: 'contacto', component: FichaContactosComponent },
    { path: '**', component: FichaErrorComponent }
];
