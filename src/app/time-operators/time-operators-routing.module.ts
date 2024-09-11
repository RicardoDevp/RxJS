import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeOperatorsComponent } from './components/time-operators/time-operators.component';

const routes: Routes = [{ path: '', component: TimeOperatorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeOperatorsRoutingModule {}
