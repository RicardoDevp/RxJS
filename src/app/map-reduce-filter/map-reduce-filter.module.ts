import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MapReduceFilterComponent } from './components/map-reduce-filter/map-reduce-filter.component';
import { MapReduceFilterRoutingModule } from './map-reduce-filter-routing.module';

@NgModule({
  declarations: [MapReduceFilterComponent],
  imports: [CommonModule, MapReduceFilterRoutingModule],
})
export class MapReduceFilterModule {}
