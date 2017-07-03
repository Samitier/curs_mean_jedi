import { Component, OnInit } from "@angular/core";

@Component({
    selector: "main-app",
    template: `
    <div>
        <random-quote></random-quote>
        <category-list></category-list>
    </div>`
})
export class AppComponent {
}