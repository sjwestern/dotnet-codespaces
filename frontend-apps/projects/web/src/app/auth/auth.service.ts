import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isLoggedIn$: Observable<boolean>;
    private _isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isAdmin$: Observable<boolean>;

    constructor(private router: Router) {
        this.isLoggedIn$ = this._isLoggedIn.asObservable();
        this.isAdmin$ = this._isAdmin.asObservable();
    }

    get isLoggedIn () {
        return this._isLoggedIn.value;
    }

    get isAdmin () {
        return this._isAdmin.value;
    }

    login(asAdmin: boolean = false){
        this._isLoggedIn.next(true);
        if(asAdmin){
            this._isAdmin.next(true);
        }
        return of(true);
    }

}
