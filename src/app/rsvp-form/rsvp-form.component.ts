import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.css']
})
export class RsvpFormComponent {
  constructor(private http: HttpClient) {}

  onCreatePost(postData: { firstname: string; lastname: string; coming: string; food: string; song: string }) {
    this.http.post('https://ijn-party-default-rtdb.firebaseio.com/rsvp.json', postData).subscribe(responseData => {
      console.log(responseData);
    })
  }
}
