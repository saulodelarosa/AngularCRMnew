import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../../guard/auth-guard.guard';

;

const routes: Routes = [
  {path:'region', loadChildren: () => import('../region/region.module').then(m=>m.RegionModule),canActivate:[AuthGuardGuard], canLoad:[AuthGuardGuard] },
  
  {path:'employee', loadChildren: () => import('../employee/employee.module').then(m=>m.EmployeeModule),canActivate:[AuthGuardGuard],canLoad:[AuthGuardGuard] },
  {path:'account', loadChildren:()=> import('../account/account.module').then(m=>m.AccountModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
