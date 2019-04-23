import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ToastrModule} from 'ngx-toastr';
import { LoginComponentComponent } from './login-component/login-component.component';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SlickModule} from 'ngx-slick';
import { HttpModule} from '@angular/http';
import { NgxSpinnerModule } from 'ngx-spinner';

// importing components
import { HomeComponentComponent } from './home-component/home-component.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// importing services
import { MessageService} from './services/message.service';
import { LoginService} from './services/login.service';
import { AuthGuard} from './guards/auth.guard';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SchoolsComponent } from './schools/schools.component';
import { CreateSchoolsComponent } from './create-schools/create-schools.component';
import { CreateSchoolComponent } from './schools/create-school/create-school.component';

// core ui modules
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';


const APP_CONTAINERS = [
    DefaultLayoutComponent
];

import {
    AppAsideModule,
    AppBreadcrumbModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';

const server_address = 'http://127.0.0.1:8000/api/v1/';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponentComponent,
      HomeComponentComponent,
      PasswordResetComponent,
      StudentDetailsComponent,
      MainComponent,
      CreateStaffComponent,
      SideMenuComponent,
      SchoolsComponent,
      CreateSchoolsComponent,
      CreateSchoolComponent,
      AppComponent,
      ...APP_CONTAINERS,
      P404Component,
      P500Component,
      LoginComponent,
      RegisterComponent

  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      SlickModule,
      HttpModule,
      ToastrModule.forRoot({
          timeOut: 2000,
          preventDuplicates: true,
      }),
      NgxSpinnerModule,
      CarouselModule.forRoot(),

      BrowserModule,
      AppRoutingModule,
      AppAsideModule,
      AppBreadcrumbModule.forRoot(),
      AppFooterModule,
      AppHeaderModule,
      AppSidebarModule,
      PerfectScrollbarModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      ChartsModule
  ],
    providers: [
        MessageService,
        LoginService,
        AuthGuard,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    slides = [
        {img: 'assets/images/africans.jpg'},
    ];
    server_address = 'http://127.0.0.1:8000/api/v1/';
}
