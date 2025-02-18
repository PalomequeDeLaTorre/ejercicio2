import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApiComponent } from './pages/api/api.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'api',
        component: ApiComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
