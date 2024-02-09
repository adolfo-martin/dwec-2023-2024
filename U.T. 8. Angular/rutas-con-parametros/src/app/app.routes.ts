import { Routes } from '@angular/router';
import { CardPokemonComponent } from '../components/card-pokemon/card-pokemon.component';

export const routes: Routes = [
    // :id es el parámetro, podemos poner más parámetros
    { path: 'pokemon/:id', component: CardPokemonComponent }
];
