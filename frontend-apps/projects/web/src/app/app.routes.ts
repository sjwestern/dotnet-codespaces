import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { adminGuard } from './admin/admin.guard';
import { authGuard } from './auth/auth.guard';
import { LoginPage } from './auth/login/login.page';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const routes: Routes = [
    { path: 'login', component: LoginPage },
    {
        path: '',
        canActivate: [authGuard],
        canActivateChild: [authGuard],
        component: LayoutComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'test' },
            {
                path: 'test',
                loadComponent: () => import('./test-page/test-page.component'),
            },
            {
                path: 'test-two',
                loadComponent: () =>
                    import('./test-two-page/test-two-page.component'),
            },
            {
                path: 'admin',
                component: AdminLayoutComponent,
                canActivate: [adminGuard],
                canActivateChild: [adminGuard],
                loadChildren: () =>
                    import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
            },
        ],
    },
    { path: '**', component: NotFoundPageComponent },
];
