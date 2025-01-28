import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     loadComponent: () => import('./components/user/user.component') 
    // },
    {
        path: 'user-page',
        component: UserComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    }, 
    {
        path: "data-binding",
        component: DataBindingComponent
    }
];
