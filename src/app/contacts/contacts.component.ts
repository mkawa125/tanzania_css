import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators, FormBuilder} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { Contacts} from '../models/contacts';
import { MessegeModel} from '../models/messegeModel';
import { MessageService} from '../services/message.service';


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
        private  fb: FormBuilder,
    ) {
    }

    public headers = new Headers({'Content-Type': 'application/json'});
    message_model = new MessegeModel();

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
        this.messageService
            .sendMessage(formData)
            .subscribe(response => {
                console.log(response);
                this.toast.success('Message Sent Successfully', 'Message Sent', {
                    timeOut: 2000,
                    positionClass: 'toast-top-right',
                    progressBar: true,
                });
            });
        this.formData.reset();
    }
}

