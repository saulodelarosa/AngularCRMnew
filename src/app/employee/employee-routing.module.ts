import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardGuard } from "../../guard/auth-guard.guard";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { ListEmployeeComponent } from "./list-employee/list-employee.component";

const routes:Routes=[
    {path:'add', component:AddEmployeeComponent, canActivate:[AuthGuardGuard]},
    
    {path:'list', component:ListEmployeeComponent,canActivate:[AuthGuardGuard]},
    {path:'edit/:id',component:EditEmployeeComponent,canActivate:[AuthGuardGuard]}
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})
export class EmployeeRoutingModule{}