import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeProductComponent} from './home-product/home-product.component';
import {NewProductComponent} from './new-product/new-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';


const routes: Routes = [
  {path:"newproduct" , component: NewProductComponent },
  {path:"homeproduct", component : HomeProductComponent },
  {path:"", redirectTo  : "homeproduct" , pathMatch : "full" },
  {path:"editp/:id",component: EditProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
