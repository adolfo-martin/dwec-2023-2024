import { Injectable } from '@angular/core';
import { Observable, flatMap, map, mergeMap, switchMap, tap } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  // inyectamos HttpClient
  constructor(private _http: HttpClient) { }

  public getPokemonById$(id: number): Observable<Pokemon> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this._http.get(url).pipe(
      // @ts-ignore
      map(pokemon => new Pokemon(id, pokemon.name, pokemon.sprites.front_default))
    );
  }

  public getPokemons$(): Observable<number[]> {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`;
    return this._http.get(url).pipe(
      // @ts-ignore
      map(response => response.results),
      // @ts-ignore
      map(pokemons => pokemons.map(pokemon => parseInt(pokemon.url.split('/')[6]))),
    );
  }
}
