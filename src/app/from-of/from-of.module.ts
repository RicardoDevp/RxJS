import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FromOfComponent } from './components/from-of/from-of.component';
import { FormOfRoutingModule } from './form-of-routing.module';

@NgModule({
  declarations: [FromOfComponent],
  imports: [CommonModule, FormOfRoutingModule],
})
export class FromOfModule {}
