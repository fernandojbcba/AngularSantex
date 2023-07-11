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
    { nombre: 'Producto 4', costo: '$30' },
    { nombre: 'Producto 5', costo: '$100' },
    { nombre: 'Producto 6', costo: '$200' },
    { nombre: 'Producto 7', costo: '$350' },
    { nombre: 'Producto 8', costo: '$120' },
    { nombre: 'Producto 9', costo: '$230' },
    { nombre: 'Producto 10', costo: '$310' },
  ];
  
  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}