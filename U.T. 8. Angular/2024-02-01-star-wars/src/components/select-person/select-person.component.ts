import { Component, Input } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';
import { Observable } from 'rxjs';
import { PersonT } from '../../models/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'select-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-person.component.html',
  styleUrl: './select-person.component.css'
})
export class SelectPersonComponent {
  @Input() label = '';

  people$: Observable<Array<PersonT>>;

  constructor(private _service: StarwarsService) {
    this.people$ = this._service.getPeople$();
  }

}
