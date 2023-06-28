import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  searchField = "";
  currentPage = 1;
  itemsPerPage = 10;
  
  products = [
    { productImage: 'image-url-1', productName: 'Product 1', category: 'Category 1', currentQty: 10, price: 9.99, status: 'Active', option: 'Option 1' },
    { productImage: 'image-url-2', productName: 'Product 2', category: 'Category 2', currentQty: 5, price: 14.99, status: 'Inactive', option: 'Option 2' },
    { productImage: 'image-url-2', productName: 'Product 3', category: 'Category 2', currentQty: 5, price: 14.99, status: 'Inactive', option: 'Option 2' },
    { productImage: 'image-url-2', productName: 'Product 4', category: 'Category 2', currentQty: 5, price: 14.99, status: 'Inactive', option: 'Option 2' },
    { productImage: 'image-url-2', productName: 'Product 5', category: 'Category 2', currentQty: 5, price: 14.99, status: 'Inactive', option: 'Option 2' },
    { productImage: 'image-url-2', productName: 'Product 6', category: 'Category 2', currentQty: 5, price: 14.99, status: 'Inactive', option: 'Option 2' },
    { productImage: 'image-url-2', productName: 'Product 7', category: 'Category 2', currentQty: 5, price: 14.99, status: 'Inactive', option: 'Option 2' },
    { productImage: 'image-url-2', productName: 'Product 8', category: 'Category 2', currentQty: 5, price: 14.99, status: 'Inactive', option: 'Option 2' },
    { productImage: 'image-url-2', productName: 'Product 9', category: 'Category 2', currentQty: 5, price: 14.99, status: 'Inactive', option: 'Option 2' },
    { productImage: 'image-url-2', productName: 'Product 10', category: 'Category 2', currentQty: 5, price: 14.99, status: 'Inactive', option: 'Option 2' },
    { productImage: 'image-url-2', productName: 'Product 11', category: 'Category 2', currentQty: 5, price: 14.99, status: 'Inactive', option: 'Option 2' },
    { productImage: 'image-url-2', productName: 'Product 12', category: 'Category 2', currentQty: 5, price: 14.99, status: 'Inactive', option: 'Option 2' }
  ];
}

