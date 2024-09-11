import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntervalTimerComponent } from './components/interval-timer/interval-timer.component';
import { IntervalTimerRoutingModule } from './interval-timer-routing.module';

@NgModule({
  declarations: [IntervalTimerComponent],
  imports: [CommonModule, IntervalTimerRoutingModule],
})
export class IntervalTimerModule {}
