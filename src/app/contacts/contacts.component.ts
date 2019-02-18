import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Http, Headers} from '@angular/http';
import { Contacts} from '../contacts';
import { promise} from 'selenium-webdriver';

declare const google: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    formData;
    fullNames;
    emailAddress;
    messageSubject;
    messageBody;

    constructor(
        private router: Router,
        private toast: ToastrService,
        private http: Http,
    ) {
    }

    public headers = new Headers({'Content-Type': 'application/json'});
    model = new Contacts();

    ngOnInit() {
        this.formData = new FormGroup({
            fullNames: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(3),
            ])),
            emailAddress: new FormControl('', Validators.compose([
                Validators.required,
                Validators.email
            ])),
            messageSubject: new FormControl('', Validators.compose([
                Validators.required,
            ])),
            messageBody: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(1000),
            ]))
        });
    }

    onClickSendMessage(formData) {
        alert(formData.fullNames);
        return this.http.post('http://127.0.0.1:8000/api/contacts', JSON.stringify(formData.value), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(Error);
    }
}

