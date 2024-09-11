import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DistinctionOperatorsComponent } from './components/distinction-operators/distinction-operators.component';
import { DistinctionOperatorsRoutingModule } from './distinction-operators-routing.module';

@NgModule({
  declarations: [DistinctionOperatorsComponent],
  imports: [CommonModule, DistinctionOperatorsRoutingModule],
})
export class DistinctionOperatorsModule {}
