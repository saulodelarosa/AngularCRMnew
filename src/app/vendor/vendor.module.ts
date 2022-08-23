import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { VendorRoutingModule } from './vendor-routing.module';
import { VendorService } from 'src/services/vendor.service';
import { DetailVendorComponent } from './detail-vendor/detail-vendor.component';




@NgModule({
  declarations: [
    ListVendorComponent,
    EditVendorComponent,
    AddVendorComponent,
    DetailVendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    FormsModule
  ],
  providers:[VendorService,
  
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true}
  ]
})
export class VendorModule { }
