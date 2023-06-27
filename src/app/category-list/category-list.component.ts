import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
    categories = [
      {
        "productName": "Product 1",
        "date": "2023-06-01",
        "image": "https://example.com/product1.jpg",
        "icon": "https://example.com/product1-icon.png",
        "slug": "product-1"
      },
      {
        "productName": "Product 2",
        "date": "2023-06-02",
        "image": "https://example.com/product2.jpg",
        "icon": "https://example.com/product2-icon.png",
        "slug": "product-2"
      },
      {
        "productName": "Product 3",
        "date": "2023-06-03",
        "image": "https://example.com/product3.jpg",
        "icon": "https://example.com/product3-icon.png",
        "slug": "product-3"
      },
      {
        "productName": "Product 4",
        "date": "2023-06-04",
        "image": "https://example.com/product4.jpg",
        "icon": "https://example.com/product4-icon.png",
        "slug": "product-4"
      },
      {
        "productName": "Product 5",
        "date": "2023-06-05",
        "image": "https://example.com/product5.jpg",
        "icon": "https://example.com/product5-icon.png",
        "slug": "product-5"
      }
    ]
}
