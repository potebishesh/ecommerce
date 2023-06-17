import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-add-new-products',
  templateUrl: './add-new-products.component.html',
  styleUrls: ['./add-new-products.component.css']
})
export class AddNewProductsComponent {
  productTypes = ['Simple', 'Classified'];
  categories = ['category1', 'category2'];
  subcategories = ['subcategory1', 'subcategory2'];
  units = ['unit1', 'unit2'];
  tags = [];
  primary:ThemePalette = "accent";
  exchangeableChecked = false;
  refundableChecked = false;
  stockStatuses = ['stockStatus1', 'stockStatus2'];
}
