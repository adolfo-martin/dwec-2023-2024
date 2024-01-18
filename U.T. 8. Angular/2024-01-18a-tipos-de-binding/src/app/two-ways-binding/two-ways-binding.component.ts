import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'two-ways-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-ways-binding.component.html',
  styleUrl: './two-ways-binding.component.css'
})
export class TwoWaysBindingComponent {
  nombre: string = 'tu nombre';
}
