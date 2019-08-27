import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxSpinnerModule} from 'ngx-spinner';


import { StudentRoutingModule} from './student-routing.module';
// importing components
import { StudentDetailsComponent} from './student-details.component';

@NgModule({
  declarations: [StudentDetailsComponent],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgxSpinnerModule,
      StudentRoutingModule,
  ]
})
export class StudentDetailsModule { }
