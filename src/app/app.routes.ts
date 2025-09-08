import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { Userview } from './pages/userview/userview';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login',component:LoginPage },
    
    {path: 'main',component:MainLayout,
      children :[
      {path: 'user',component:Userview} 
    ]
    }
];
