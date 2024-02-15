import { Component } from '@angular/core';
import { HeroCountryComponent } from '../hero-country/hero-country.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tab-countries',
  standalone: true,
  imports: [HeroCountryComponent, CommonModule],
  templateUrl: './tab-countries.component.html',
  styleUrl: './tab-countries.component.css'
})
export class TabCountriesComponent {
  countriesLoaded = false;

  reportLikeSpain(e: any) {
    alert('Bien, te gusta España');
  }

  reportLoaded(e: any) {
    this.countriesLoaded = true;
  }

}
