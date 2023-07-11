import { Component } from '@angular/core';

interface Item {
  nombre: string;
  costo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarLista = false;
  
  lista: Item[] = [
    { nombre: 'Producto 1', costo: '$10' },
    { nombre: 'Producto 2', costo: '$20' },
    { nombre: 'Producto 3', costo: '$30' }
  ];
  
  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}