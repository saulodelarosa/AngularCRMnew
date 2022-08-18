import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AuthGuardGuard } from "../../guard/auth-guard.guard";
import { AddRegionComponent } from "./add-region/add-region.component";
import { ListRegionComponent } from "./list-region/list-region.component";

const routes:Routes=[
    {path:'list', component:ListRegionComponent},
    
    {path:'add', component:AddRegionComponent}
]

@NgModule(
    {
        imports:[RouterModule.forChild(routes)]
    }
)
export class RegionRoutingModule{

}