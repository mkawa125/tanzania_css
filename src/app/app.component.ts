import { Component } from '@angular/core';
import { Injectable} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {title = 'tcss';
    constructor( ) {
        console.log('Data service connected...');
    }
}

