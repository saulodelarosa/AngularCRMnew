import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { AccountRoutingModule } from './account-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { TokenInterceptor } from '../../interceptors/token.interceptor';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    RouterModule,
    HttpClientModule,
   
    ReactiveFormsModule
  ],
  providers:[AccountService,
  
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true}
  ]
})
export class AccountModule { }
