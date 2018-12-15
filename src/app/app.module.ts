import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SlickModule} from 'ngx-slick';

// importing components
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

 // Defining routes
const AppRoutes: Routes = [
    { path: '' , component: LoginComponentComponent},
    { path: 'home' , component: HomeComponentComponent},
    { path: 'reset-password', component: PasswordResetComponent},
];

@NgModule({
  declarations: [
      AppComponent,
      LoginComponentComponent,
      HomeComponentComponent,
      PasswordResetComponent,
      StudentDetailsComponent,
      FooterComponent,
      MainComponent,
      HeaderComponent,
import { LoginComponentComponent } from './login-component/login-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent

  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(AppRoutes),
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      SlickModule,
      CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    slides = [
        {img: 'assets/images/africans.jpg'},
    ];
}
