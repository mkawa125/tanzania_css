import { Component, OnInit } from '@angular/core';
import { LoginService} from '../services/login.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  constructor(
      private loginService: LoginService,
      private  router: Router,
  ) { }
    slides = [
        {img: '../assets/images/africans.jpg'},
        {img: '../assets/images/code.jpg'},
        {img: '../assets/images/php.jpg'},
    ];
  home_image = '../assets/images/africans.jpg';
  hot_icon = '../assets/images/hot.gif';
  new_gif_icon = '../assets/images/new-gif-icon-2.jpg';
  red_fire_2 = '../assets/images/red-fire-2.gif';
  red_fire = '../assets/images/red-fire.gif';
  new_red_clean = '../assets/images/new-red-clean.gif';
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
