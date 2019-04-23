import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponentRoutingModule } from './login-component-routing.module';
import { LoginComponentComponent} from './login-component.component';

@NgModule({
  declarations: [LoginComponentComponent],
  imports: [
    CommonModule,
    LoginComponentRoutingModule
  ]
})
export class LoginComponentModule { }
