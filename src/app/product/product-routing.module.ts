import{NgModule} from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ListProductComponent } from "./list-product/list-product.component";
import { DetailProductComponent } from "./detail-product/detail-product.component";
import { AuthGuardGuard } from "src/guard/auth-guard.guard";

const routes:Routes=[
    {path:'add', component:AddProductComponent,canActivate:[AuthGuardGuard] },
    {path:'list', component:ListProductComponent, canActivate:[AuthGuardGuard]},
    {path:'edit/:id',component:EditProductComponent, canActivate:[AuthGuardGuard]},
    {path:'detail/:id',component:DetailProductComponent, canActivate:[AuthGuardGuard]}


]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ProductRoutingModule{
    
}