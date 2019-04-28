import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { Router} from '@angular/router';
import { LoginService} from '../../services/login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private loginService: LoginService;
  private router: Router;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(@Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
  avatar = '../assets/images/mkawa.jpg';
  logo = '../assets/images/logo-og.png';

  ngOnDestroy(): void {
    this.changes.disconnect();
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
