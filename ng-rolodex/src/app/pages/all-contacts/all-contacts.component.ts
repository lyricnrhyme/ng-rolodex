import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.scss']
})
export class AllContactsComponent implements OnInit {
  user: any
  contact: any
  allUsers: any
  allContacts: any

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.user = this.backend.user;
    this.contact = this.backend.contact;
    this.allUsers = this.backend.allUsers;
    this.allContacts = this.backend.allContacts;

    this.backend.getContacts()
    .then(data => {
      this.allContacts = data
    })
    .catch(err => {
      console.log('all contacts err', err);
    })
  }

}
