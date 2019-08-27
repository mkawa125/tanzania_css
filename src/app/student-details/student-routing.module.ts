import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuard} from '../guards/auth.guard';
import { StudentDetailsComponent} from './student-details.component';
import {Route, RouterModule} from '@angular/router';

const routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: StudentDetailsComponent,
    data: {
      title: 'Students'
    },
    children: [
      {
        path: '',
        redirectTo: 'students',
        component: StudentDetailsComponent,
      },
      {
        path: 'primary',
        component: StudentDetailsComponent,
        data: {
          title: 'Primary'
        }
      },
    ],
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
