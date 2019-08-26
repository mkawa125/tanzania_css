import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponentComponent} from './login-component/login-component.component';


import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
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
    component: LoginComponentComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'logout',
    canActivate: [AuthGuard],
    component: LoginComponentComponent
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    component: LoginComponentComponent
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
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'schools',
        loadChildren: './schools/schools.module#SchoolsModule'
      },
      {
        path: 'students',
        loadChildren: './student-details/student-details.module#StudentDetailsModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule'
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
      },
      {
        path: 'regions',
        loadChildren: './locations/about.module#AboutModule'
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
