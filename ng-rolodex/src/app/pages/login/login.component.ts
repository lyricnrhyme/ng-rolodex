import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = true;
  toggleLogin() {
    console.log(this.isLoggedIn)
  }
  constructor() { }

  ngOnInit() {
  }

}
