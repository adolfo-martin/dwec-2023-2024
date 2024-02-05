import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PersonT } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private _http: HttpClient) { }

  public getPeople$(): Observable<Array<PersonT>> {
    const url = "https://swapi.dev/api/people";
    return this._http.get(url).pipe(
      // @ts-ignore
      map(response => response.results),
      // @ts-ignore
      map(people => people.map(person => ({
        id: person.url.split('/').slice(5, 1),
        name: person.name,
        height: person.height,
        mass: person.mass,
        gender: person.gender,
      })))
    );
  }

}
