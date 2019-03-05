import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  url = 'http://localhost:8000/conatct-us';

  constructor(private http: HttpClient) { }

  sendMessageData(message) {
    const message_object = {
        message_body: message.messageBody,
        email: message.emailAddress,
        subject: message.messageSubject,
        fullNames: message.fullNames,
    };
      this.http.post(`${this.url}/add`, message_object)
          .subscribe(res => console.log('Done'));
  }
}
