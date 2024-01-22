import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MiEtiquetaComponent } from '../mi-etiqueta/mi-etiqueta.component';
import { MiEtiquetaEventInterface } from '../mi-etiqueta-event-interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MiEtiquetaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensajeRecibido: string = '';

  procesarMensaje(e: MiEtiquetaEventInterface) {
    this.mensajeRecibido = e.getMessage();
    console.log(e.getTimestamp());
    console.log(e.getTarget());
  }

}
