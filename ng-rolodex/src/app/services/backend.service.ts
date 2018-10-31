import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    testNames: object[] = [{name:'Jyama'}, {name:'Sarah'}, {name:'Jamie'}, {name:'Wymin'}, {name:'Nick'}, {name:'Doug'}, {name:'Abby'}, {name:'Carl'}, {name:'Jason'}, {name:'Romeo'}, {name:'Jeff'}, {name:'May'}, {name:'Harsh'}, {name:'Chaz'}, {name:'Raymond'}, {name:'Baseem'}, {name:'Ed'}, {name: 'Kenny'}, {name: 'Jesus'}, {name: 'Bronson'}, {name: 'George'}, {name: 'McKarl'}, {name: 'Isaiah'}];

    constructor(private http: HttpClient) {
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