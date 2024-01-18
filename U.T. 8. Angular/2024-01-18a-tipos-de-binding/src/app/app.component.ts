import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWaysBindingComponent } from './two-ways-binding/two-ways-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWaysBindingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2024-01-18a-tipos-de-binding';
}
