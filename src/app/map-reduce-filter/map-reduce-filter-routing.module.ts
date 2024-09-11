import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapReduceFilterComponent } from './components/map-reduce-filter/map-reduce-filter.component';

const routes: Routes = [{ path: '', component: MapReduceFilterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapReduceFilterRoutingModule {}
