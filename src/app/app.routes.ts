import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';



export const routes: Routes = [

     {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then(m => m.LoginComponent)
  },

    {path:'home',
         canActivate: [authGuard]
        ,loadComponent:()=>
        import ('./home/home.component')
        .then (m=>m.HomeComponent)
    },
    {path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
