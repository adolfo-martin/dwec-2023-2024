import { Component } from '@angular/core';

@Component({
  selector: 'property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  url: string = 'https://angular.io/';
  texto: string = 'Sitio oficial del framework Angular'
  objetivo: string = '_blank';
}
