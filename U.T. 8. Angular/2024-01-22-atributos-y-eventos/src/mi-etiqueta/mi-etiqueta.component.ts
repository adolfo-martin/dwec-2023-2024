import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MiEtiquetaEventInterface } from '../mi-etiqueta-event-interface';
import { MiEtiquetaEvent } from '../mi-etiqueta-event';

@Component({
  selector: 'mi-etiqueta',
  standalone: true,
  imports: [],
  templateUrl: './mi-etiqueta.component.html',
  styleUrl: './mi-etiqueta.component.css'
})
export class MiEtiquetaComponent {
  @Input('mensaje') mensajeRecibido: string;
  @Output('onmensaje') emisorMensaje = new EventEmitter<MiEtiquetaEventInterface>();

  constructor() {
    this.mensajeRecibido = '';
    setTimeout(
      // () => this.dispatchEvent()
      this.dispatchEvent.bind(this)
      , 5000);
  }

  dispatchEvent() {
    const event: MiEtiquetaEventInterface = new MiEtiquetaEvent(this, 'Hola, cómo están los máquinas');
    this.emisorMensaje.emit(event);
  }
}
