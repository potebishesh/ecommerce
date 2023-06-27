import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AddNewProductsComponent } from './add-new-products/add-new-products.component'
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddNewCategoryComponent } from './add-new-category/add-new-category.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [ 
    { path: 'products', component:ProductsComponent },
    { path: 'add-new-products', component:AddNewProductsComponent },
    { path: 'add-new-user', component:AddNewUserComponent },
    { path: 'all-users', component:AllUsersComponent },
    { path: 'category-list', component:CategoryListComponent},
    { path: 'add-new-category', component:AddNewCategoryComponent},
    { path: 'order-tracking', component:OrderTrackingComponent},
    { path: 'order-detail', component:OrderDetailComponent},
    { path: 'order-list', component:OrderListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }