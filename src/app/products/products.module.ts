import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [AllProductsComponent, DetailsComponent],
  imports: [CommonModule],
})
export class ProductsModule {}
