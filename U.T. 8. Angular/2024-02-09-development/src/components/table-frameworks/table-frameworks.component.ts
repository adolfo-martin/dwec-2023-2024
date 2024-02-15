import { Component, OnInit } from '@angular/core';
import { DevelopmentService, FrameworkT } from '../../services/development.service';
import { Observable, concatMap, map, mergeMap, switchMap, tap, zip } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'table-frameworks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-frameworks.component.html',
  styleUrl: './table-frameworks.component.css'
})
export class TableFrameworksComponent implements OnInit {
  // @ts-ignore
  frameworks$: Observable<FrameworkT[]>;

  constructor(
    private _service: DevelopmentService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const areaId = this._route.snapshot.paramMap.get('area');
    if (areaId) {
      // @ts-ignore
      this.frameworks$ = this._service.getFrameworksByArea$(areaId).pipe(
        // @ts-ignore
        map(frameworks => frameworks.map(frameworkId => this._service.getFrameworkById$(frameworkId))),
        // @ts-ignore
        switchMap(frameworks =>
          zip(...frameworks),
        ),

        // mergeMap(frameworks => frameworks),
        // tap(console.log),
        // // @ts-ignore
        // concatMap(frameworkId => this._service.getFrameworkById$(frameworkId)),
      );
    } else {
      this.frameworks$ = this._service.getFrameworks$();
    }
  }

}
