import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule} from 'ngx-spinner';
import { ToastrModule} from 'ngx-toastr';
import { SlickModule} from 'ngx-slick';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateSchoolComponent} from './create-school.component';

@NgModule({
  declarations: [CreateSchoolComponent],
  imports: [
      CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true,
    }),
    SlickModule,
    NgxSpinnerModule,
  ]
})
export class CreateSchoolModule { }
