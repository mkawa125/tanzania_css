import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolsComponent} from './schools.component';
import { CreateSchoolComponent} from './create-school/create-school.component';
import {AuthGuard} from '../guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: {
      title: 'Schools'
    },
    children: [
      {
        path: '',
        redirectTo: 'schools',
        component: SchoolsComponent,
      },
      {
        path: 'primary',
        component: SchoolsComponent,
        data: {
          title: 'Primary'
        }
      },
      {
        path: 'secondary',
        component: SchoolsComponent,
        data: {
          title: 'Secondary'
        }
      },
      {
        path: 'advanced',
        component: SchoolsComponent,
        data: {
          title: 'Advanced'
        }
      },
      {
        path: 'create',
        component: CreateSchoolComponent,
        data: {
          title: 'Create School',
        },
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule { }
