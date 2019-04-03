import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  server = 'http://127.0.0.1:8000/api/v1/';
  headers: Headers = new Headers();
  options: any;
  constructor( private http: Http) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-requested-width', 'XMLHttpRequest');
    this.options = new RequestOptions({headers: this.headers});
  }
  isLoggedIn: Boolean;
  login(postData) {
    const data = JSON.stringify(postData);
    return this.http.post(this.server + 'login', data, this.options)
        .map(
            response => {
                return response.json();
        })
        .do (
        user => {
          localStorage.setItem('token', user.token);
          localStorage.setItem('role', user.user.role);
          localStorage.setItem('name', user.user.name);
          localStorage.setItem('surname', user.user.surname);
          localStorage.setItem('firstName', user.user.firstName);
          this.isLoggedIn = true;
        }
    );
  }
  getUserROle() {
      if (this.isLoggedIn === true) {
          const role = localStorage.getItem('role');
          this.isLoggedIn = true;
          return role;
      }
  }
  getUserName() {
      if (this.isLoggedIn === true) {
          const name = localStorage.getItem('name');
          this.isLoggedIn = true;
          return name;
      }
      return false;
  }
    checkAuth() {
        if (localStorage.getItem('token')) {
            this.isLoggedIn = true;
            return true;
        }
        return false;
    }
  logout() {
      return this.http.get(
          this.server + 'logout',
          { headers: new Headers({ 'Authorization': 'Bearer :' + localStorage.getItem('token') }) }
      )
          .map(
              response => {
                  return response.json();
              })
          .do(
              () => {
                  localStorage.removeItem('token');
                  this.isLoggedIn = false;
              }
              );
  }
}
