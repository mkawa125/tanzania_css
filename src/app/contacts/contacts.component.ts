import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { MessageService} from '../services/message.service';
import { NgxSpinnerService } from 'ngx-spinner';


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
        private messageService: MessageService,
        private toast: ToastrService,
        private spinner: NgxSpinnerService,
        private  fb: FormBuilder,
    ) {
    }

    public headers = new Headers({'Content-Type': 'application/json'});

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
    sendMessage(formData) {
        try {
            this.spinner.show();
            console.log(formData);
            this.messageService
                .sendMessage(formData)
                .subscribe(response => {
                    console.log(response);
                    this.spinner.hide();
                    this.toast.success('Message Sent Successfully', 'Message Sent', {
                        timeOut: 1500,
                        positionClass: 'toast-top-right',
                        progressBar: true,
                    });
                    this.formData.reset();
                });
        } catch {
            this.spinner.hide();
            this.toast.error('Message not sent', 'Failure', {
                timeOut: 2000,
                positionClass: 'toast-top-right',
                progressBar: true,
            });
        }
    }
}

