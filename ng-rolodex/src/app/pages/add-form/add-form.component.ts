import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  testNames: object[]

  formData: {
    name: string,
    address: string,
    mobile: string,
    work: string,
    home: string,
    email: string,
    twiter: string,
    instagram: string,
    github: string
  } = {
    name: '',
    address: '',
    mobile: '',
    work: '',
    home: '',
    email: '',
    twiter: '',
    instagram: '',
    github: ''
  }

  constructor(private backend: BackendService) { }

  addContact() {
    this.testNames.push({
      name: this.formData.name,
      address: this.formData.address,
      mobile: this.formData.mobile,
      work: this.formData.work,
      home: this.formData.home,
      email: this.formData.email,
      twiter: this.formData.twiter,
      instagram: this.formData.instagram,
      github: this.formData.github
    })
    console.log('testing', this.testNames);
  }

  ngOnInit() {
    this.testNames = this.backend.testNames
  }

}
