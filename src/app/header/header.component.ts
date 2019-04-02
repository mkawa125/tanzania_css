import { Component, OnInit } from '@angular/core';
import { LoginService} from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
      private loginService: LoginService,
  ) { }
  tanzania_flag = '../assets/images/flag-tz.tmp';
  no_image = 'No image';
  ngOnInit() {
  }
  logout() {
    this.loginService.logout().subscribe(
        response => console.log(response),
        error => console.log(error),
        () =>  console.log('logged out')
    );
  }

}
