import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {

  constructor(
      private loginService: LoginService,
      private  router: Router,
  ) { }
  profile = '../assets/images/mkawa.jpg';
  user_role = this.loginService.getUserROle();
  username = this.loginService.getUserName();
  ngOnInit() {
  }
  logout() {
    this.loginService.logout().subscribe(
        response => console.log(response),
        error => console.log(error),
        () => {
          this.router.navigate(['/login']);
        }
    );
  }
}
