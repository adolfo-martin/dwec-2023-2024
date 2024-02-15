import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TabProductsComponent } from "../components/tab-products/tab-products.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, TabProductsComponent, RouterLink]
})
export class AppComponent {
  title = '2024-02-14-hardwaresolutions';
}
