import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistinctionOperatorsComponent } from './components/distinction-operators/distinction-operators.component';

const routes: Routes = [{ path: '', component: DistinctionOperatorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistinctionOperatorsRoutingModule {}
