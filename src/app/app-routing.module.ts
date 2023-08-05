import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
