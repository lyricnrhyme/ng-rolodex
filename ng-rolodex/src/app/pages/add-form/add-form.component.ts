import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  baseUrl: string

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

  constructor(private backend: BackendService, private http: HttpClient) { }

  addContact() {
    let url = this.baseUrl + '/new';
    let obj = {
      name: this.formData.name,
      address: this.formData.address,
      mobile: this.formData.mobile,
      work: this.formData.work,
      home: this.formData.home,
      email: this.formData.email,
      twitter: this.formData.twiter,
      instagram: this.formData.instagram,
      github: this.formData.github
    }
    this.http.post(url, obj)
      .subscribe(res => {
        console.log('posted')
      })
  }


  ngOnInit() {
    this.baseUrl = this.backend.baseUrl
  }

}
