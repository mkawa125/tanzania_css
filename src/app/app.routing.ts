import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    },
    canActivate: [AuthGuard],
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'schools',
        canActivate: [AuthGuard],
        loadChildren: './schools/schools.module#SchoolsModule'
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        canActivate: [AuthGuard],
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        canActivate: [AuthGuard],
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        canActivate: [AuthGuard],
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        canActivate: [AuthGuard],
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'contacts',
        canActivate: [AuthGuard],
        loadChildren: './contacts/contacts.module#ContactsModule'
      },
      {
        path: 'about',
        canActivate: [AuthGuard],
        loadChildren: './about/about.module#AboutModule'
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
