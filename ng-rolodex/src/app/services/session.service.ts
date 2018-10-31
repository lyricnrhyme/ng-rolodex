import { Injectable } from '@angular/core';

@Injectable ({
    providedIn: 'root'
})
export class SessionService {
    user = {
        loggedIn: false,
        username: ''
    }

    constructor() {
        let userString = window.localStorage.getItem('user');
        try {
            if(userString) {
                this.user = JSON.parse(userString);
            }
            else {
                console.log('user was not found');
            }
        }
        catch(err) {
            console.log('user err', err);
        }
    }

    getSession() {
        return this.user;
    }

    setSession(username) {
        //save to memory
        this.user.username = username;
        this.user.loggedIn = true;

        //save to localStorage
        let userString = JSON.stringify(this.user);
        window.localStorage.setItem('user', userString);
    }

    clearSession() {
        this.user.loggedIn = false;
        this.user.username = '';
        window.localStorage.removeItem('user');
    }

    isLoggedIn() {
        return this.user.loggedIn;
    }
}

//Browser Local Storage in da Google => adding user key and {'id': 1, 'username': 'ed'} as the value