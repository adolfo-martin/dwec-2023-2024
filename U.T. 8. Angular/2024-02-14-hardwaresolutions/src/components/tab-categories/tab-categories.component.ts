import { Component } from '@angular/core';
import { RadiosCategoriesComponent } from "../radios-categories/radios-categories.component";

@Component({
  selector: 'tab-categories',
  standalone: true,
  templateUrl: './tab-categories.component.html',
  styleUrl: './tab-categories.component.css',
  imports: [RadiosCategoriesComponent]
})
export class TabCategoriesComponent {

}
