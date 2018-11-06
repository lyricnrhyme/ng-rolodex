import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value = ''
  user: any
  contact: any
  allUsers: any
  allContacts: any
  constructor(private backend: BackendService) {

   }

  onKeyUp(event: any) {
    this.value = event.target.value;
    console.log('new type', this.value.toLowerCase());
    let cardName = document.getElementsByClassName('testName');
    let card = document.getElementsByClassName('test');
    for (let i=0; i<cardName.length; i++) {
      if (cardName[i].innerHTML.toString().toLowerCase().startsWith(this.value.toLowerCase())) {
        (card[i] as HTMLElement).style.display = 'block';
      } else {
        (card[i] as HTMLElement).style.display = 'none';
      }
      if (this.value === '') {
        (card[i] as HTMLElement).style.display = 'none';
      }
    }
  }

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
