import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGuardGuard } from '../guard/auth-guard.guard';
import { AdminGuard } from './admin.guard';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
{path:'login',component:LoginComponent, canActivate:[AdminGuard]},
{
path:'product',
loadChildren:()=>import('./product/product.module').then(x=>x.ProductModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
