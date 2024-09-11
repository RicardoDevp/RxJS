import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./wordle/wordle.module').then((m) => m.WordleModule),
  },
];
