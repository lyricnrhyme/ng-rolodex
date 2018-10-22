import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value = ''
  testNames = [{name:'Jyama'}, {name:'Sarah'}, {name:'Jamie'}, {name:'Wymin'}, {name:'Nick'}, {name:'Doug'}, {name:'Abby'}, {name:'Carl'}, {name:'Jason'}, {name:'Romeo'}, {name:'Jeff'}, {name:'May'}, {name:'Harsh'}, {name:'Chaz'}, {name:'Raymond'}, {name:'Baseem'}, {name:'Ed'}]
  constructor() { }

  onKeyUp(event: any) {
    this.value = event.target.value;
    console.log('new type', this.value);
  }

  ngOnInit() {
  }

}
