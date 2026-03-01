import { Routes } from '@angular/router';
import { LoginPage } from './components/pages/login-page/login-page';
import { RegisterPage } from './components/pages/register-page/register-page';
import { TasksPage } from './components/pages/tasks-page/tasks-page';
import { guestGuard } from './guards/guest-guard';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path:"", 
        component:TasksPage,
        canActivate: [authGuard],
    },
    {
        path:"login", 
        component:LoginPage,
        canActivate: [guestGuard]
    },
    {
        path:"register", 
        component:RegisterPage,
        canActivate: [guestGuard]
    },
];
