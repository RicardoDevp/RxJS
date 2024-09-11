import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SubjectComponent } from './components/subject/subject.component';
import { SubjectRoutingModule } from './subject-routing.module';

@NgModule({
  declarations: [SubjectComponent],
  imports: [CommonModule, SubjectRoutingModule],
})
export class SubjectModule {}
