import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TimeOperatorsComponent } from './components/time-operators/time-operators.component';
import { TimeOperatorsRoutingModule } from './time-operators-routing.module';

@NgModule({
  declarations: [TimeOperatorsComponent],
  imports: [CommonModule, TimeOperatorsRoutingModule],
})
export class TimeOperatorsModule {}
