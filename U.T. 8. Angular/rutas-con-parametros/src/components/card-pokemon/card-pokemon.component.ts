import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.css'
})
export class CardPokemonComponent {
  // @ts-ignore
  pokemon$: Observable<Pokemon>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: PokemonsService) {

    this._router.routeReuseStrategy.shouldReuseRoute = () => false;

    // @ts-ignore
    const pokemonId = parseInt(this._route.snapshot.paramMap.get('id'));

    this.pokemon$ = this._service.getPokemonById$(pokemonId);
    // en el constructor no se pueden poner operaciones asíncronas
    // ¿esto es asincrono? no, porque no nos estamos subscribiendo
    // si fuera asincrono, hay que usar el interface OnInit
  }

}
