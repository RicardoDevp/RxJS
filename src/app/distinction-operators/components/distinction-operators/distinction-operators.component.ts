import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  from,
} from 'rxjs';

@Component({
  selector: 'app-distinction-operators',
  templateUrl: './distinction-operators.component.html',
  styleUrl: './distinction-operators.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DistinctionOperatorsComponent implements OnInit {
  //TODO Nota muy importante, los operadores reactivos trabajan en base a referencias, no comparan dos objetos
  //TODO porque sean iguales en su contenido sino que además deben tener la misma referencia

  private numberArray = [1, 2, 3, 4, 4, 5, 5, 6, 4];
  private objectArray: { id: number; name: { first: string; last: string } }[] =
    [
      { id: 1, name: { first: 'Juan', last: 'Alimaña' } },
      { id: 2, name: { first: 'Pedro', last: 'Pe' } },
      { id: 1, name: { first: 'Juan', last: 'Alimaña' } },
      { id: 3, name: { first: 'Pedro', last: 'Perez' } },
      { id: 4, name: { first: 'Victor', last: 'Montes' } },
      { id: 4, name: { first: 'Victor', last: 'Montes' } },
      { id: 1, name: { first: 'Juan', last: 'Alimaña' } },
      { id: 1, name: { first: 'Juan', last: 'Alimaña' } },
      { id: 5, name: { first: 'Frank', last: 'Cuesta' } },
      { id: 5, name: { first: 'Frank', last: 'Cuesta' } },
      { id: 6, name: { first: 'Julita', last: 'Ocendi' } },
      { id: 4, name: { first: 'Victor', last: 'Montes' } },
    ];

  fromNumbers$ = from(this.numberArray);
  fromObjects$ = from(this.objectArray);

  ngOnInit(): void {
    console.log(
      'distinct operator with number array [1, 2, 3, 4, 4, 5, 5, 6, 4]'
    );
    this.fromNumbers$.pipe(distinct()).subscribe((value) => {
      console.log(value);
    });

    console.log(
      'distinctUntilChanged operator with number array [1, 2, 3, 4, 4, 5, 5, 6, 4]'
    );
    this.fromNumbers$.pipe(distinctUntilChanged()).subscribe((value) => {
      console.log(value);
    });

    console.log(
      'distinctUntilKeyChanged operator with object array [{id: 1,.},{ id: 2,.},{id: 1,.},{id: 3,.},{id: 4,.},{id: 4,.},{id: 1,.},{id: 1,.},{id: 5,.},{id: 5,.},{id: 6,.}, {id: 4,.},]'
    );
    this.fromObjects$.pipe(distinctUntilKeyChanged('id')).subscribe((value) => {
      console.log(value);
    });
  }
}
