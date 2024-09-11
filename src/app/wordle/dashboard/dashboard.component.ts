import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  observable$ = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(20);
    subscriber.complete();
  });

  onMouseMove$ = fromEvent(document, 'mousemove');

  ngOnInit(): void {
    const observador = {
      next: (value: any) => console.log(value),
      complete: () => {
        console.log('completado');
      },
      error: (error: any) => {
        console.log('error', error);
      },
    };

    this.observable$.subscribe(observador);

    const observadorOnMouseMove = {
      next: (value: any) => console.log(value),
      complete: () => {
        console.log('completado');
      },
      error: (error: any) => {
        console.log('error', error);
      },
    };

    this.onMouseMove$.subscribe(observadorOnMouseMove);
  }
}
