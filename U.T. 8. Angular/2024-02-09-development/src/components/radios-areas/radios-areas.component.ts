import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AreaT, DevelopmentService } from '../../services/development.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'radios-areas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radios-areas.component.html',
  styleUrl: './radios-areas.component.css'
})
export class RadiosAreasComponent {
  areas$: Observable<AreaT[]>;

  constructor(
    private _service: DevelopmentService,
    private _router: Router
  ) {
    this.areas$ = this._service.getAreas$();
  }

  // @ts-ignore
  gotoTabFrameworks(e) {
    const areaId = e.target.value;
    // --> /frameworks/backend
    // --> /frameworks/frontend
    this._router.navigate(['frameworks', areaId]);
  }
}
