import { Routes } from '@angular/router';

export const routes: Routes = [
  //TODO: Rutas para probar los componentes de wordle
  {
    path: '',
    loadChildren: () =>
      import('./wordle/wordle.module').then((m) => m.WordleModule),
  },
  //TODO: Ruta para probar el subject
  {
    path: 'subject',
    loadChildren: () =>
      import('./subject/subject.module').then((m) => m.SubjectModule),
  },
  //TODO: Ruta para probar los operadores form y of
  {
    path: 'fromOf',
    loadChildren: () =>
      import('./from-of/from-of.module').then((m) => m.FromOfModule),
  },
  //TODO: Ruta para probar los operadores interval y timer
  {
    path: 'intervalTimer',
    loadChildren: () =>
      import('./interval-timer/interval-timer.module').then(
        (m) => m.IntervalTimerModule
      ),
  },
  //TODO: Ruta para probar los operadores map reduce y filter
  {
    path: 'mapReduceFilter',
    loadChildren: () =>
      import('./map-reduce-filter/map-reduce-filter.module').then(
        (m) => m.MapReduceFilterModule
      ),
  },
  //TODO: Ruta para probar la aplicación de Board
  {
    path: 'board',
    loadChildren: () =>
      import('./board/board.module').then((m) => m.BoardModule),
  },
  //TODO: Ruta para probar la aplicación de operadores de distinción
  {
    path: 'distinctionOperators',
    loadChildren: () =>
      import('./distinction-operators/distinction-operators.module').then(
        (m) => m.DistinctionOperatorsModule
      ),
  },
  //TODO: Ruta para probar la aplicación de operadores de tiempo
  {
    path: 'timeOperators',
    loadChildren: () =>
      import('./time-operators/time-operators.module').then(
        (m) => m.TimeOperatorsModule
      ),
  },
];
