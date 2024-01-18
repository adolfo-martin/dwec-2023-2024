import { Component } from '@angular/core';

@Component({
  selector: 'mi-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './mi-pokemon.component.html',
  styleUrl: './mi-pokemon.component.css'
})
export class MiPokemonComponent {
  name: string = 'Bulbasur';
  image: string = '/assets/images/bulbasur.jpg';
  height: number = 87;
  weight: number = 114;
}
