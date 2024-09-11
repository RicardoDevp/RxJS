import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnChanges {
  @Output() finishTime = new EventEmitter<void>();

  @Input() winGame = false;

  _cdr = inject(ChangeDetectorRef);

  disabledStartButton = false;

  public timeInSeconds = 0;

  public clockMinutes = 0;

  public clockSeconds = 0;

  interval$ = interval(1000);

  private sub: Subscription = new Subscription();

  ngOnChanges(): void {
    this.stopTimer();
  }

  startTimer(): void {
    this.disabledStartButton = true;
    this.startTime();
  }

  startTime(): void {
    this.sub?.add(
      this.interval$.subscribe((seconds) => {
        this.clockSeconds++;
        if (this.clockSeconds === 60) {
          this.clockSeconds = 0;
          this.clockMinutes++;
        }
        this.verifyTime(seconds);
        this._cdr.markForCheck();
      })
    );
  }

  verifyTime(seconds: number): void {
    if (seconds === this.timeInSeconds) {
      this.stopTimer();
      this.finishTime.emit();
    }
  }

  stopTimer(): void {
    this.disabledStartButton = false;
    this.restartTimeVariables();
    this.sub.unsubscribe();
    this.sub = new Subscription();
  }

  restartTimeVariables(): void {
    this.clockMinutes = 0;
    this.clockSeconds = 0;
    this.timeInSeconds = 0;
  }
}
