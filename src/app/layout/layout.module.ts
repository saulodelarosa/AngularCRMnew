import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeModule } from '../employee/employee.module';
import { FormsModule } from '@angular/forms';
import { RegionModule } from '../region/region.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LayoutRoutingModule,
    EmployeeModule,
    RegionModule,
    FormsModule,
    RouterModule
  ],
  exports:[],
  bootstrap:[DashboardComponent]
})
export class LayoutModule { }
