import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateprodComponent } from './createprod/createprod.component';
import { ReadprodComponent } from './readprod/readprod.component';
import { ProductsComponent } from './classes/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateprodComponent,
    ReadprodComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
