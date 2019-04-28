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
        canActivate: [AuthGuard],
      },
      {
        path: 'primary',
        component: SchoolsComponent,
        canActivate: [AuthGuard],
        data: {
          title: 'Primary'
        }
      },
      {
        path: 'secondary',
        component: SchoolsComponent,
        canActivate: [AuthGuard],
        data: {
          title: 'Secondary'
        }
      },
      {
        path: 'advanced',
        component: SchoolsComponent,
        canActivate: [AuthGuard],
        data: {
          title: 'Advanced'
        }
      },
      {
        path: 'create',
        component: CreateSchoolComponent,
        canActivate: [AuthGuard],
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
