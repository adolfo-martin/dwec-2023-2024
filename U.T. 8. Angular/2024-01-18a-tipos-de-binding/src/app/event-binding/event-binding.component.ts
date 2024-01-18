import { Component } from '@angular/core';

@Component({
  selector: 'event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  letraBoton: string = 'Ninguna';

  registrarLetra(letra: string) {
    this.letraBoton = letra;
  }
}
