import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule} from 'ngx-toastr';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SlickModule} from 'ngx-slick';
import { HttpModule} from '@angular/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProgressBarModule} from 'angular-progress-bar';

// importing components
import { HomeComponentComponent } from './home-component/home-component.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// importing services
import { MessageService} from './services/message.service';
import { LoginService} from './services/login.service';
import { AuthGuard} from './guards/auth.guard';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

// core ui modules
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponentModule} from './login-component/login-component.module';


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
      HomeComponentComponent,
      PasswordResetComponent,
      MainComponent,
      CreateStaffComponent,
      SideMenuComponent,
      AppComponent,
      ...APP_CONTAINERS,
      P404Component,
      P500Component,
      LoginComponent,
      RegisterComponent

  ],
  imports: [
      BrowserModule,
      LoginComponentModule,
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
      ChartsModule,
      ProgressBarModule,
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
