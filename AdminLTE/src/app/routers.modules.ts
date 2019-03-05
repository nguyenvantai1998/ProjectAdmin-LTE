import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

//service
import { AuthGuard } from "./services/auth.guard";

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: UserComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
    }
];