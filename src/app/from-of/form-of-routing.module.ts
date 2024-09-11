import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromOfComponent } from './components/from-of/from-of.component';

const routes: Routes = [{ path: '', component: FromOfComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormOfRoutingModule {}
