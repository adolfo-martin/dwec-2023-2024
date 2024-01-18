import { Component, Input } from '@angular/core';

@Component({
  selector: 'mi-etiqueta',
  standalone: true,
  imports: [],
  template: `<p>Información suministrada en el atributo "mensaje":</p>
    < p > {{ mensaje }}</p>`,
  styleUrl: './mi-etiqueta.component.css'
})
export class MiEtiquetaComponent {
  @Input('mensaje') mensaje: string = '';
}
