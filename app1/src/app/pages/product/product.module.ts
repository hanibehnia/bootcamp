import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdAddComponent } from './prod-add/prod-add.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProdListComponent,
    ProdAddComponent,
    ProdDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
