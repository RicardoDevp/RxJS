import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrl: './interval-timer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntervalTimerComponent implements OnInit {
  interval$ = interval(1000);

  timer$ = timer(5000);

  ngOnInit(): void {
    // this.interval$.subscribe(console.log);
    this.timer$.subscribe(console.log);
  }
}
