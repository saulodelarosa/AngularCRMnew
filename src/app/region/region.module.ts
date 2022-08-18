import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRegionComponent } from './add-region/add-region.component';
import { ListRegionComponent } from './list-region/list-region.component';
import { RegionRoutingModule } from './region-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegionService } from '../../services/region.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TokenInterceptor } from '../../interceptors/token.interceptor';



@NgModule({
  declarations: [
    AddRegionComponent,
    ListRegionComponent
  ],
  imports: [
    CommonModule,
    RegionRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[RegionService,
  
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true}]
})
export class RegionModule { }
