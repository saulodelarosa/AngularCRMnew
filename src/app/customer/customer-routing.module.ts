import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardGuard } from "../../guard/auth-guard.guard";
import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { EditCustomerComponent } from "./edit-customer/edit-customer.component";
import { ListCustomerComponent } from "./list-customer/list-customer.component";

const routes:Routes=[
    {path:'add', component:AddCustomerComponent, canActivate:[AuthGuardGuard]},
    
    {path:'list', component:ListCustomerComponent,canActivate:[AuthGuardGuard]},
    {path:'edit/:id',component:EditCustomerComponent,canActivate:[AuthGuardGuard]}
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})
export class CustomerRoutingModule{}