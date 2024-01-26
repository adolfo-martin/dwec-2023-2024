import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CommonModule } from '@angular/common';
import { CardCountryComponent } from '../card-country/card-country.component';

@Component({
  selector: 'cards-countries',
  standalone: true,
  imports: [CommonModule, CardCountryComponent],
  templateUrl: './cards-countries.component.html',
  styleUrl: './cards-countries.component.css'
})
export class CardsCountriesComponent {
  public countries$;

  constructor(private _service: CountriesService) {
    this.countries$ = this._service.retrieveCountries$();
  }
}
