import { Component } from '@angular/core';
import { CientificosService } from '../../services/cientificos.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cientificos-lista',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cientificos-lista.component.html',
  styleUrl: './cientificos-lista.component.css'
})
export class CientificosListaComponent {
  cientificos$;

  constructor(private _service: CientificosService) {
    this.cientificos$ = this._service.recuperarCientificos$();
  }
}
