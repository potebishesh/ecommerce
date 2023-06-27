import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent {
  primary:ThemePalette = "accent";
  productAddProductChecked = false;
  productUpdateProductChecked = false;
  productDeleteProductChecked = false;
  productDiscountChecked = false;
  categoryAddProductChecked = false;
  categoryUpdateProductChecked = false;
  categoryDeleteProductChecked = false;
  categoryDiscountChecked = false;
}
