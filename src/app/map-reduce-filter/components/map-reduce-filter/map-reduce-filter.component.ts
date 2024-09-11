import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { filter, from, map, reduce } from 'rxjs';

@Component({
  selector: 'app-map-reduce-filter',
  templateUrl: './map-reduce-filter.component.html',
  styleUrl: './map-reduce-filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapReduceFilterComponent implements OnInit {
  from$ = from([1, 2, 3, 4, 5, 6]);
  reduce$ = this.from$.pipe(reduce((acc, value) => acc + value, 0));
  map$ = this.from$.pipe(map((value) => value * 2));
  filter$ = this.from$.pipe(filter((value) => value % 2 === 0));

  ngOnInit(): void {
    //TODO - Form crea un observable y emite valores forma parte de los operadores de creación o creacionales ---------------------------------------------------------
    console.log('from');
    this.from$.subscribe(console.log);

    ////TODO - Estos de abajo son operadores pipeables o de transformación---------------------------------------------------------------------------------------------

    //TODO - Reduce emite un solo valor que es el resultado de aplicar una función acumuladora, este observable se completa junto con el obsevarble de entrada u origen
    console.log('reduce');
    this.reduce$.subscribe(console.log);

    //TODO - Map emite valores transformados por una función que recibe como argumento
    console.log('map');
    this.map$.subscribe(console.log);

    //TODO - Filter emite valores que cumplan con una condición dada
    console.log('filter');
    this.filter$.subscribe(console.log);

    //TODO - Todos los operadores de creacionales tienen un método pipe al que se puede llamar---------------------------------------------------------------------------
    console.log('pipe map');
    this.from$
      .pipe(
        map((value) => value * 2),
        map((value) => value / 3),
        reduce((acc, value) => acc + value, 0),
        filter((value) => value % 2 === 0),
        filter((value) => value > 13)
      )
      .subscribe(console.log);
  }
}
