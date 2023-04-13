import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'Login',component: LoginComponent,},
 
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full'
      },
      {
        path: 'admin', loadChildren: () => import('./dash/dash.module').then(m => m.DashModule)
      }
      
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
