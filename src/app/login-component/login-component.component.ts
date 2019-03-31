import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
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
  indexNumber;
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
          indexNumber: new FormControl('', Validators.compose([
              Validators.required,
              Validators.maxLength(15),
          ])),
          password: new FormControl('', Validators.compose([
              Validators.required,
              Validators.minLength(6)])
          )
      });

}
  // onClickSubmit(inputData) {
  //     this.spinner.show();
  //     setTimeout(() => {
  //         /** spinner ends after 3 seconds */
  //         this.spinner.hide();
  //     }, 1000);
  //     console.log(inputData);
  //     if (inputData.indexNumber === 'admin' && inputData.password === '123456') {
  //         this.spinner.hide();
  //         this.toast.success('Login Successfully', 'Success', {
  //             timeOut: 2000,
  //             positionClass: 'toast-top-right',
  //         });
  //         this.router.navigate(['']);
  //         this.router.navigate(['home']);
  //         document.getElementById('login-container').style.display = '';
  //         document.getElementById('home-container').style.display = '';
  //     } else {
  //         this.toast.error('Invalid Login', 'Failed', {
  //             timeOut: 2000,
  //             positionClass: 'toast-top-right',
  //             progressBar: true,
  //         });
  //         return false;
  //     }
  // }

    userLogin(inputData) {
      try {
          this.spinner.show();
          console.log(inputData);
          this.login
              .login(inputData)
              .subscribe(response => {
                  console.log(response);
                  this.spinner.hide();
                  this.toast.success('Login successfully', 'Success', {
                      timeOut: 1500,
                      positionClass: 'toast-top-right',
                      progressBar: true,
                  });
                  this.formData.reset();
              });
      } catch {
          this.spinner.hide();
          this.toast.error('Login Failure', 'Failure', {
              timeOut: 2000,
              positionClass: 'toast-top-right',
              progressBar: true,
          });
      }
    }
}
