import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { Userview } from './pages/userview/userview';

export const routes: Routes = [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login',component:LoginPage },
    {path: 'user',component:Userview}
];
