import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-country',
  standalone: true,
  imports: [],
  templateUrl: './card-country.component.html',
  styleUrl: './card-country.component.css'
})
export class CardCountryComponent {
  @Input('name') name: string = '';
  @Input('capital') capital: string = '';
  @Input('population') population: string = '';
  @Input('area') area: string = '';
  @Input('flag') flag: string = '';
}
