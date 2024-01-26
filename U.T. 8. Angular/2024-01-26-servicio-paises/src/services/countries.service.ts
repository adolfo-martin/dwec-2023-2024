import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export type CountryT = {
  name: { common: string },
  capital: string,
  population: string,
  area: string,
  flags: { svg: string }
}


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _http: HttpClient) { }

  public retrieveCountries$(): Observable<Array<CountryT>> {
    const url = 'https://restcountries.com/v3.1/all';

    return this
      ._http.get<Array<CountryT>>(url);
  }

  // public retrieveCountryByCode(code) {

  // }
}
