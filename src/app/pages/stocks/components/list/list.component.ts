import { Component } from '@angular/core';

@Component({
  selector: 'list-stock',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor() {}
  inventario = [
    {
      id: 1,
      nombre: "bolitas",
      cantidad: 3,
      precio: 5000
    },
    {
      id: 2,
      nombre: "bolitas rojad",
      cantidad: 5,
      precio: 10000
    }
  ]
}
