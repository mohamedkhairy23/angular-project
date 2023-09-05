import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartsModule,
    SharedModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
