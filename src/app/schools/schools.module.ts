import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsComponent} from './schools.component';
import { CreateSchoolComponent} from './create-school/create-school.component';

@NgModule({
  declarations: [SchoolsComponent, CreateSchoolComponent],
  imports: [
    CommonModule,
    SchoolsRoutingModule
  ]
})
export class SchoolsModule { }
