import { Injectable } from '@angular/core';
import { Cientifico } from '../entities/cientifico';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CientificosService {

  private static _cientificos = [
    new Cientifico('mc', 'Marie Curie', 'Física', 'polaca'),
    new Cientifico('ia', 'Ian Fleming', 'Biología', 'inglesa'),
    new Cientifico('ae', 'Albert Einstein', 'Física', 'alemana'),
    new Cientifico('gg', 'Galileo Galilei', 'Física', 'italiana'),
    new Cientifico('sr', 'Santiago Ramón y Cajal', 'Biología', 'española'),
    new Cientifico('so', 'Severo Ochoa', 'Biología', 'española'),
    new Cientifico('al', 'Ada Lovelace', 'Matemáticas', 'inglesa'),
  ]

  constructor() { }

  public recuperarCientificos$(): Observable<Cientifico[]> {
    return of(CientificosService._cientificos);
  }

  public recuperarCientifico$(id: string): Observable<Cientifico> {
    const cientifico = CientificosService._cientificos
      .find(cientifico => cientifico.id === id);
    // @ts-ignore
    return of(cientifico);
  }
}
