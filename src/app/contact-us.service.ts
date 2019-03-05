import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  url = 'http://localhost:8000/conatct-us';

  constructor(private http: HttpClient) { }

  sendMessage(message_body, email, subject, fullNames) {
    const message = {
        message_body: message_body,
        email: email,
        subject: subject,
        fullNames: fullNames,
    };
      this.http.post(`${this.url}/add`, message)
          .subscribe(res => console.log('Done'));
  }
}
