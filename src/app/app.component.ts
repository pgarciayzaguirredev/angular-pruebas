import { Component } from '@angular/core';

interface Product {
  code: string;
  name: string;
  category: string;
  quantity1: string;
  quantity2: string;
  quantity3: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  cars: any[] = [
    { marca: 'Audi', matricula: 'ABC456', modelo1: 'A3', modelo2: 'A5', modelo3: 'A7' },
    { marca: 'BMW', matricula: 'PLC123', modelo1: '320', modelo2: 'X5', modelo3: 'X3' },
    { marca: 'Toyota', matricula: 'ABC123', modelo1: 'Camry', modelo2: 'Corolla', modelo3: 'Rav4' },
    { marca: 'Honda', matricula: 'DEF456', modelo1: 'Civic', modelo2: 'Accord', modelo3: 'CR-V' },
    { marca: 'Ford', matricula: 'GHI789', modelo1: 'Mustang', modelo2: 'F-150', modelo3: 'Escape' },
  ];
  
  products: Product[] = [
    {code: '1', name: 'Laptop', category: 'Informática', quantity1: '5', quantity2: '5', quantity3: '5'},
    {code: '2', name: 'Tv', category: 'Entretenimiento', quantity1: '7', quantity2: '5', quantity3: '5'},
    {code: '3', name: 'Home cinema', category: 'Entretenimiento', quantity1: '2', quantity2: '5', quantity3: '5'},
    {code: '4', name: 'Movil', category: 'Tecnológica', quantity1: '6', quantity2: '5', quantity3: '5'},
    {code: '5', name: 'Lavadora', category: 'Linea blanca', quantity1: '2', quantity2: '5', quantity3: '5'},
    {code: '6', name: 'Nevera', category: 'Linea BLanca', quantity1: '4', quantity2: '5', quantity3: '5'}
  ];

  cols: any[] = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
  ];

  constructor() { }

  ngOnInit() {

    // this.productService.getProductsSmall().then(data => this.products = data);
  }


}
