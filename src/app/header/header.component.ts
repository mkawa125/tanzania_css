import { Component, OnInit } from '@angular/core';
import { LoginService} from '../services/login.service';
import { NgxSpinnerService} from 'ngx-spinner';
import { ToastrService} from 'ngx-toastr';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
      private loginService: LoginService,
      private spinner: NgxSpinnerService,
      private toast: ToastrService,
      private router: Router,
  ) {}
  tanzania_flag = '../assets/images/flag-tz.tmp';
  no_image = 'No image';
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
