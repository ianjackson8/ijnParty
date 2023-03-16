import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserID } from './userID.model';

@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.css']
})
export class RsvpFormComponent {

  constructor(private http: HttpClient, private router: Router, private dataService: DataService) {

  }

  onCreatePost(postData: { firstname: string; lastname: string; coming: string; food: string; bringFood: string, song: string }) {
    this.http.post<UserID>('https://ijn-party-default-rtdb.firebaseio.com/rsvp.json', postData).subscribe((responseData: UserID) => {
      console.log(responseData);
    })

    this.router.navigate(['/confirmed']);
  }
}
