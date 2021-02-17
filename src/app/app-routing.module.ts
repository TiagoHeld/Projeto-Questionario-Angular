import { LoginGuardGuard } from './guards/login-guard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent 
  },
  {
    path: 'home', component: HomeComponent 
  },
  {
    path: 'sobre', component: SobreComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component:DashboardComponent,
    canActivate:[LoginGuardGuard]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
