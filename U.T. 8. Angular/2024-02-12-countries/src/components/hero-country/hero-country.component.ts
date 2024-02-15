import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountriesService, CountryI } from '../../services/countries.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hero-country',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-country.component.html',
  styleUrl: './hero-country.component.css'
})
export class HeroCountryComponent implements OnInit {
  @Input('country') public countryCode: string = '';
  @Output('countryLoaded') public countryLoadedEmitter = new EventEmitter<any>();
  @Output('countryLiked') public countryLikedEmitter = new EventEmitter<any>();

  country$: Observable<CountryI> = {} as Observable<CountryI>;

  constructor(private _service: CountriesService) {
  }

  ngOnInit(): void {
    this.country$ = this._service.getCountryByCode$(this.countryCode);
    this.country$.subscribe(country => this.countryLoadedEmitter.emit());
  }

  reportLike(e: any) {
    e.target.textContent = '❤';
    this.countryLikedEmitter.emit();
  }

}
