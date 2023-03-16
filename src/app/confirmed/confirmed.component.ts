import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Person } from './person.model';
import { GlobalVariable } from './../globals';
import { DataService } from '../data.service';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.css']
})
export class ConfirmedComponent implements OnInit {
  person: Person | undefined;

  constructor(private http: HttpClient, private dataService: DataService) {

  }

  ngOnInit(): void {
    this.getUserInfo();
    this.showUserInfo();
  }

  getUserInfo() {
    return this.http.get<Person>('https://ijn-party-default-rtdb.firebaseio.com/rsvp.json');
  }

  showUserInfo() {
    this.getUserInfo().subscribe((data: Person) => {
      this.person = data;
    })
  }
}
