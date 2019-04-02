import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ToastrModule} from 'ngx-toastr';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SlickModule} from 'ngx-slick';
import { HttpModule} from '@angular/http';
import { NgxSpinnerModule } from 'ngx-spinner';

// importing components
import { HomeComponentComponent } from './home-component/home-component.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';

// importing services
import { MessageService} from './services/message.service';
import { LoginService} from './services/login.service';
import { AdminComponent } from './dashboard/admin/admin.component';
import { AuthGuard} from './guards/auth.guard';
// Defining routes
const AppRoutes: Routes = [
    { path: '' , component: HomeComponentComponent , canActivate: [AuthGuard]},
    { path: 'login' , component: LoginComponentComponent},
    { path: 'reset-password', component: PasswordResetComponent},
    { path: 'about' , component: AboutComponent, canActivate: [AuthGuard]},
    { path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard]},
];
const server_address = 'http://127.0.0.1:8000/api/v1/';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponentComponent,
      HeaderComponentComponent,
      FooterComponentComponent,
      AppComponent,
      LoginComponentComponent,
      HomeComponentComponent,
      PasswordResetComponent,
      StudentDetailsComponent,
      FooterComponent,
      MainComponent,
      HeaderComponent,
      AboutComponent,
      ContactsComponent,
      AdminComponent,

  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(AppRoutes),
      RouterModule.forChild(AppRoutes),
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
  ],
    providers: [
        MessageService,
        LoginService,
        AuthGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    slides = [
        {img: 'assets/images/africans.jpg'},
    ];
    server_address = 'http://127.0.0.1:8000/api/v1/';
}
