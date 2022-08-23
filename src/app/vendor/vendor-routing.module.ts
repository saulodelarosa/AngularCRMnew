import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardGuard } from "../../guard/auth-guard.guard";
import { AddVendorComponent } from "./add-vendor/add-vendor.component";
import { DetailVendorComponent } from "./detail-vendor/detail-vendor.component";
import { EditVendorComponent } from "./edit-vendor/edit-vendor.component";
import { ListVendorComponent } from "./list-vendor/list-vendor.component";

const routes:Routes=[
    {path:'add', component:AddVendorComponent, canActivate:[AuthGuardGuard]},
    {path:'list', component:ListVendorComponent,canActivate:[AuthGuardGuard]},
    {path:'edit/:id',component:EditVendorComponent,canActivate:[AuthGuardGuard]},
    {path:'detail/:id',component:DetailVendorComponent,canActivate:[AuthGuardGuard]},

]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})
export class VendorRoutingModule{}