import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  auditTime,
  debounceTime,
  from,
  fromEvent,
  sampleTime,
  throttleTime,
} from 'rxjs';

@Component({
  selector: 'app-time-operators',
  templateUrl: './time-operators.component.html',
  styleUrl: './time-operators.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeOperatorsComponent implements OnInit {
  fromNumbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  fromEvent$ = fromEvent(document, 'click');

  ngOnInit(): void {
    this.fromNumbers$
      .pipe(sampleTime(0.0000000000000000000000000000000000000000000000000001))
      .subscribe((value) => {
        console.log(
          'sampleTime operator with number array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]: ',
          value
        );
      });
    this.fromNumbers$
      .pipe(
        debounceTime(0.0000000000000000000000000000000000000000000000000001)
      )
      .subscribe((value) => {
        console.log(
          'debounceTime operator with number array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]: ',
          value
        );
      });
    this.fromNumbers$
      .pipe(
        throttleTime(0.0000000000000000000000000000000000000000000000000001)
      )
      .subscribe((value) => {
        console.log(
          'throttleTime operator with number array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]: ',
          value
        );
      });
    this.fromNumbers$
      .pipe(auditTime(0.0000000000000000000000000000000000000000000000000001))
      .subscribe((value) => {
        console.log(
          'auditTime operator with number array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]: ',
          value
        );
      });
  }
}
