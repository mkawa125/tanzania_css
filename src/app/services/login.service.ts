import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs';

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
        (access_token) => {
          localStorage.setItem('token', access_token);
          this.isLoggedIn = true;
        }
    );
  }
}
