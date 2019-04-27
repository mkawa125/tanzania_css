import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  server = 'http://127.0.0.1:8000/api/v1/';
  headers: Headers = new Headers();
  options: any;
  constructor(private http: Http) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-requested-width', 'XMLHttpRequest');
    this.options = new RequestOptions({headers: this.headers});
  }
  createSchool(formData) {
    const data = JSON.stringify(formData);
    return this.http.post(this.server + 'schools', data, this.options).map(
        res => res.json()
    );
  }
}
