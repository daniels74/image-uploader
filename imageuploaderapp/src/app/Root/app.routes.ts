import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../Features/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('../Features/users/users.component').then((c) => c.UsersComponent),
  },
];
