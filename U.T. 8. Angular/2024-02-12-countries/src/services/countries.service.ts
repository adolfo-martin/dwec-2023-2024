import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map } from 'rxjs';


export interface CountryI {
  code: string;
  name: string;
  capital: string;
  flag: string;
  area: number;
  population: number;
}


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _http: HttpClient) { }

  public getCountryByCode$(countryCode: string): Observable<CountryI> {
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
    return this._http.get(url).pipe(
      // @ts-ignore
      map(countries => countries[0]),
      map(country => ({
        code: countryCode,
        name: country.name.official,
        capital: country.capital,
        flag: country.flags.svg,
        area: country.area,
        population: country.population,
      })),
      delay(2000),
    );
  }
}
