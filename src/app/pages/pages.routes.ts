import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { UserComponent } from './user/user.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'registros', component: UserComponent},
            { path: '', redirectTo: '/registros', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
