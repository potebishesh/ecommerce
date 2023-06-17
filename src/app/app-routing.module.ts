import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AddNewProductsComponent } from './add-new-products/add-new-products.component'
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [ 
    { path: 'products', component: ProductsComponent },
    { path: 'add-new-products', component:AddNewProductsComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
