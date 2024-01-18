import { Component } from '@angular/core';

@Component({
  selector: 'interpolation-binding',
  standalone: true,
  imports: [],
  templateUrl: './interpolation-binding.component.html',
  styleUrl: './interpolation-binding.component.css'
})
export class InterpolationBindingComponent {
  nombre: string = 'Sonia Castillo';
  edad: number = 25;
  saludo: string = '¡Buenos días!';
}
