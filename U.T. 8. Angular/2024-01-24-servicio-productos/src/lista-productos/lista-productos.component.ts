import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';
import { CommonModule } from '@angular/common';
import { ProductoT } from '../datos';

@Component({
  selector: 'lista-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos: Array<ProductoT> | undefined = undefined;

  constructor(private service: ProductosService) {
    setTimeout(
      () => this.productos = this.service.recuperarProductos()
      , 5000
    );

  }


}
