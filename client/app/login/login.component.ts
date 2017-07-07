import { Component, OnInit } from '@angular/core';
import { User } from "../shared/models/user.model";
import { QuotesApiService } from "../shared/services/quotes-api.service";
import { Router } from '@angular/router';
import { AuthService } from "../shared/services/auth.service";

@Component({
    selector: 'login',
    template: `
        <section class="login-component container">
            <h1 class="text-center">Login</h1>
            <div class="form-field">
                <label for="email">Email:</label>
                <input 
                    placehloder="Email"
                    type="text" 
                    name="email"
                    [(ngModel)]="user.email"
                >
            </div>
            <div class="form-field">
                <label for="password">Password:</label>
                <input 
                    placehloder="Password"
                    type="password" 
                    name="password"
                    [(ngModel)]="user.password"
                >
            </div>
            <div class="form-field text-right">
                <a class="btn" (click)="onSendLogin()">Login</a>
            </div>
        </section>
    `
})

export class LoginComponent {

    user: User = new User()

    constructor(
        private _api: QuotesApiService, 
        private _router: Router,
        private _auth: AuthService
    ) { }

    async onSendLogin() {
        try {
            await this._api.login(this.user)
            this._auth.announceIsLogged()
            this._router.navigate([""])
        }
        catch(e) {
            console.log(e)
        }
    }
}