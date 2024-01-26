import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TableCountriesComponent } from '../components/table-countries/table-countries.component';
import { CardsCountriesComponent } from '../components/cards-countries/cards-countries.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TableCountriesComponent, CardsCountriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2024-01-26-servicio-paises';
}
