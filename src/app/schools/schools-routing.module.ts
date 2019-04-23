import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolsComponent} from './schools.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Schools'
    },
    children: [
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule { }
