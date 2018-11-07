import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// 'http://54.244.59.72:8989/'

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    baseUrl: string = 'http://localhost:8989' 
    user: any[] = [];
    contact: any;
    allUsers: any[] = [];
    allContacts: any[] = [];
    id: any;

    constructor(private http: HttpClient) {
    }

    getContacts() {
        const url = this.baseUrl + '/contacts';
        return this.http.get(url).toPromise();
    }

    getUsers() {
        const url = this.baseUrl + '/users';
        return this.http.get(url).toPromise();
    }
    
    moreInfo() {
        const url = this.baseUrl + '/contacts/' + this.id;
        return this.http.get(url).toPromise();
    }

    storeId(id) {
        this.id = id;
    }

    register(data) {
        return Promise.resolve({});
    }

    login(data) {
        return Promise.resolve({username: data.username})
    }

    logout() {
        return Promise.resolve({});
    }

}