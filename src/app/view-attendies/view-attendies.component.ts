import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from '../confirmed/person.model';

@Component({
  selector: 'app-view-attendies',
  templateUrl: './view-attendies.component.html',
  styleUrls: ['./view-attendies.component.css']
})
export class ViewAttendiesComponent implements OnInit {
  person: any | undefined;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getUserInfo();
    this.showUserInfo();
  }

  getUserInfo() {
    return this.http.get<Person>('https://ijn-party-default-rtdb.firebaseio.com/rsvp.json');
  }

  showUserInfo() {
    this.getUserInfo().subscribe((data: any) => {
      this.person = Object.keys(data).map((key) => { return data[key] });
      console.log(this.person)
    })
  }
}
