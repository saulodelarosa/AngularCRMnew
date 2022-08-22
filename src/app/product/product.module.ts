import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../../interceptors/token.interceptor';
import { ProductService } from 'src/services/product.service';
import { Router, RouterModule } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';



@NgModule({
  declarations: [
    AddProductComponent,
    ListProductComponent,
    EditProductComponent,
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[ProductService,
  
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true}
  ]
})
export class ProductModule { }
