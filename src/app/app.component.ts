import { Component } from '@angular/core';
import { Injectable} from '@angular/core';
import { Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {title = 'tcss';
    constructor(public http: Http) {
        console.log('Data service connected...');
    }

    getPosts() {
        this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(res => res.json()));
    }
}

