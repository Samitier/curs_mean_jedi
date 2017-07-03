import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'category-detail',
    template: `
        <section class="category-detail-component">
            Soc una category
        </section>
    `
})

export class CategoryDetailComponent implements OnInit {
    
    constructor(private _route: ActivatedRoute) { }

    private _routeSubscription: Subscription

    ngOnInit() {
        this._routeSubscription = this._route.params.subscribe( param => {
            
        })
    }

    ngOnDestroy() {
        this._routeSubscription.unsubscribe()
    }
}