import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { HttpClient} from '@angular/common/http';
import { Headers} from '@angular/http';
import { Contacts} from '../contacts';

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
      private http: HttpClient,
  ) { }
    public headers = new Headers({'Content-Type': 'application/json'});
    model = new Contacts()
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
    console.log(formData.value);
    this.toast.success('Message sent Successfully', 'Success', {
        timeOut: 2000,
        positionClass: 'toast-top-right',
        progressBar: true,
    });
  }
}
