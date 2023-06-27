import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { productImage: 'image-url-1', productName: 'Product 1', category: 'Category 1', currentQty: 10, price: 9.99, status: 'Active', option: 'Option 1' },
    { productImage: 'image-url-2', productName: 'Product 2', category: 'Category 2', currentQty: 5, price: 14.99, status: 'Inactive', option: 'Option 2' },
  ];
}

