import {Routes} from '@angular/router';


// importing components
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthGuard} from './guards/auth.guard';
import { PasswordResetComponent} from './password-reset/password-reset.component';
import { CreateStaffComponent} from './create-staff/create-staff.component';

export const APP_ROUTES: Routes = [
    { path: '' , component: HomeComponentComponent , canActivate: [AuthGuard]},
    { path: 'login' , component: LoginComponentComponent},
    { path: 'reset-password', component: PasswordResetComponent},
    { path: 'about' , component: AboutComponent, canActivate: [AuthGuard]},
    { path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard]},
    { path: 'staffs', component: CreateStaffComponent, canActivate: [AuthGuard]}
    ];