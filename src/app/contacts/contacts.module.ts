import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent} from './contacts.component';
import { NgxSpinnerModule} from 'ngx-spinner';
import { SlickModule} from 'ngx-slick';
import { ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [ContactsComponent],
  imports: [
      CommonModule,
      ContactsRoutingModule,
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
export class ContactsModule { }
