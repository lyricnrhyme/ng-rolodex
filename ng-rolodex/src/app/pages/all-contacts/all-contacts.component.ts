import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.scss']
})
export class AllContactsComponent implements OnInit {
  testNames: object[]
  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.testNames = this.backend.testNames;
  }

}
