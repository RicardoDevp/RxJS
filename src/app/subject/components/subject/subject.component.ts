import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectComponent implements OnInit {
  numbers$ = new Observable((subscriber) => {
    subscriber.next(Math.round(Math.random() * 100));
  });

  numbersRandom$ = new Subject();

  ngOnInit(): void {
    //TODO: Emitir valores solo con el observable y no con el multicast o multidifusión del subject para comprobar que llegan valores distintios a cada observador ( 1 y 2)

    const observador1 = {
      next: (value: any) => console.log(value),
      error: (error: any) => console.log(error),
      complete: () => console.log('Complete'),
    };

    this.numbers$.subscribe(observador1);

    const observador2 = {
      next: (value: any) => console.log(value),
      error: (error: any) => console.log(error),
      complete: () => console.log('Complete'),
    };

    this.numbers$.subscribe(observador2);

    //TODO: Emitir valores con el subject con el método multicast de subject para comprobar que llegan valores iguales a cada observador ( 3 y 4)

    const observador3 = {
      next: (value: any) => console.log('Observador 3', value),
      error: (error: any) => console.log(error),
      complete: () => console.log('Complete'),
    };

    this.numbersRandom$.subscribe(observador3);

    const observador4 = {
      next: (value: any) => console.log('Observador 4', value),
      error: (error: any) => console.log(error),
      complete: () => console.log('Complete'),
    };

    this.numbersRandom$.subscribe(observador4);

    //TODO: Aquí se usa el un subject como observable y se emiten valores con el método next de subject

    this.numbers$.subscribe(this.numbersRandom$);

    //TODO: Aquí se emiten valores con el método next de subject

    this.numbersRandom$.next(45);
  }
}
