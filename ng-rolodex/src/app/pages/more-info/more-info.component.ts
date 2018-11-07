import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})

export class MoreInfoComponent implements OnInit {

  id: any;
  contact: any;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.id = this.backend.id
    this.contact = this.backend.contact;

    this.backend.moreInfo()
    .then(results => {
      console.log('results', results);
      this.contact = results[0];
    })
  }

}
