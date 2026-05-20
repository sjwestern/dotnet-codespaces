import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'test' },
    {
        path: 'test',
        loadComponent: () =>
            import('./admin-test-page/admin-test-page.component').then(
                (m) => m.AdminTestPageComponent,
            ),
    },
    {
        path: 'two',
        loadComponent: () =>
            import('./admin-two/admin-two.page').then((m) => m.AdminTwoPage),
    },
];
