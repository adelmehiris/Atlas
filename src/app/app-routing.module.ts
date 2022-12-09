import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { PageHomeComponent } from './page/page-home/page-home.component';
import { PageLoginComponent } from './page/page-login/page-login.component';
import { PageMessageComponent } from './page/page-message/page-message.component';

const routes: Routes = [
  {
    path:'',
    component: PageHomeComponent
  },
  {
    path:'login',
    component: PageLoginComponent,
    canDeactivate:[AuthGuard]
  },
  {
    path:'message',
    component: PageMessageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'**', /* wildcard */
    redirectTo:'',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
