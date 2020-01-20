import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewProductComponent } from './new-product/new-product.component';
import { HomeProductComponent } from './home-product/home-product.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NewProductComponent,
    HomeProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
