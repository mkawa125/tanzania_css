import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent} from './contacts.component';
import {AuthGuard} from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Contacts'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
