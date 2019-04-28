import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponentRoutingModule } from './login-component-routing.module';
import { LoginComponentComponent} from './login-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {SlickModule} from 'ngx-slick';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  declarations: [LoginComponentComponent],
  imports: [
    CommonModule,
    LoginComponentRoutingModule,
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
export class LoginComponentModule { }
