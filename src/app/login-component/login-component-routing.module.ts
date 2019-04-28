import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponentComponent} from './login-component.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponentComponent,
    data: {
      title: 'About TCSS'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginComponentRoutingModule { }
