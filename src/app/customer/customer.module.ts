import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';
import { CustomerService } from 'src/services/customer.service';



@NgModule({
  declarations: [
    ListCustomerComponent,
    AddCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  providers:[CustomerService,
  
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true}
  ]
})
export class CustomerModule { }
