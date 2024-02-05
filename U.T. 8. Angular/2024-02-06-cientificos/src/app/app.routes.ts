import { Routes } from '@angular/router';
import { CientificosListaComponent } from '../components/cientificos-lista/cientificos-lista.component';
import { CientificoDetalleComponent } from '../components/cientifico-detalle/cientifico-detalle.component';

export const routes: Routes = [
    { path: 'cientificos', component: CientificosListaComponent },
    { path: 'cientifico/:id', component: CientificoDetalleComponent }
];
