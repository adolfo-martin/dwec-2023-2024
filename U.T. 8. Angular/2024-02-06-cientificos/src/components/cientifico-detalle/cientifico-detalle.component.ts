import { Component } from '@angular/core';
import { CientificosService } from '../../services/cientificos.service';
import { Observable } from 'rxjs';
import { Cientifico } from '../../entities/cientifico';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cientifico-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cientifico-detalle.component.html',
  styleUrl: './cientifico-detalle.component.css'
})
export class CientificoDetalleComponent {
  cientifico$: Observable<Cientifico>;

  constructor(
    private _service: CientificosService,
    private _ruta: ActivatedRoute,
  ) { }
}
