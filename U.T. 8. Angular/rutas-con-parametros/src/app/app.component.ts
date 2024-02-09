import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CardPokemonComponent } from '../components/card-pokemon/card-pokemon.component';
import { SelectPokemonsComponent } from '../components/select-pokemons/select-pokemons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, CardPokemonComponent, SelectPokemonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rutas-con-parametros';

  // para hacer una redireccion inyectamos un objeto Router
  // pruebo esto en app-root y luego lo borro
  constructor(private _router: Router) { }


  // @ts-ignore
  public cambiarPokemon(e) {
    const pokemonId = e.target.value;
    // Hay que pasar la ruta troceada en forma de array
    this._router.navigate(['pokemon', pokemonId]);
  }
}
