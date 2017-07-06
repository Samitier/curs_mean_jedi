import { Component, OnInit } from "@angular/core";

@Component({
    selector: "main-app",
    template: `
    <div>
        <nav class="main-nav">
            <a routerLink="/quotes">All Quotes</a>
            <a routerLink="/categories">Categories</a>
            <a routerLink="/login">Login</a>
        </nav>
        <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {
}