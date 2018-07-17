import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIndexComponent } from './product-index/product-index.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductRepositoryService } from './ProductRepository/product-repository.service';
import { SharedModule } from '../Shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
export const routes: Routes = [
  { path: 'Products/Details/:Id', component: ProductDetailsComponent },
  { path: 'Product/Create', component: ProductCreateComponent },
  { path: 'Products', component: ProductIndexComponent }
];
@NgModule({
  imports: [
    CommonModule,   
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule ,
    FormsModule
  ],
  declarations: [ProductIndexComponent, ProductDetailsComponent, ProductCreateComponent],
  exports: [
    RouterModule
  ],
  providers:[
     ProductRepositoryService]
})
export class ProductModule { }
