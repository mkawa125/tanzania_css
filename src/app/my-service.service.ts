import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  server = 'http://127.0.0.1:8000/';
  headers: Headers = new Headers;
  options: any;
  constructor(private http: HttpClient) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-requested-with', 'XMLHttpRequest');
    this.options = new RequestOptions({headers: this.headers});
  }
}
