import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

 // importing components
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FooterComponent } from './footer/footer.component';

 // Defining routes
const AppRoutes: Routes = [
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
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(AppRoutes),
      BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
