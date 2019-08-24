import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

import { LoginService} from '../services/login.service';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  formData;
  email;
  constructor(
      private router: Router,
      private toast: ToastrService,
      private spinner: NgxSpinnerService,
      private login: LoginService,
      ) { }
    tanzania_flag = '../assets/images/flag-tz.tmp';
    logo = '../assets/images/logo.png';
    logo2 = '../assets/images/logo-og.png';
  ngOnInit() {
      this.formData = new FormGroup({
          email: new FormControl('', Validators.compose([
              Validators.required,
              Validators.maxLength(30),
          ])),
          password: new FormControl('', Validators.compose([
              Validators.required,
              Validators.minLength(6)])
          )
      });

}
    userLogin(inputData: NgForm) {
          this.spinner.show();
          console.log(inputData);
          this.login.login(inputData).subscribe(
              response => {
                  console.log(response);
                  },
              error => {
                  console.log(error);
                  this.spinner.hide();
                  this.toast.error(
                      'Invalid Login',
                      'Failed',
                      {timeOut: 2000,
                          positionClass: 'toast-top-right',
                          progressBar: true,
                      });
                  this.router.navigate(['/login']);
              },
              () => {
                  this.spinner.hide();
                  this.toast.success('Login Successfully', 'Success', {
                      timeOut: 2000,
                      positionClass: 'toast-top-right',
                  });
                  this.router.navigate(['/']);
              }
          );
  }
    logout() {
        this.login.logout().subscribe(
            response => console.log(response),
            error => console.log(error),
            () => {
                this.router.navigate(['/login']);
            }
        );
    }
}
