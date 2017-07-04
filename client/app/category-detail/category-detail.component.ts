import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { QuotesApiService } from "../shared/services/quotes-api.service";
import { Category } from "../shared/models/category.model";


@Component({
    selector: 'category-detail',
    template: `
        <section class="category-detail-component container" *ngIf="category">
            <h1 class="text-center">{{ category.title }}</h1>
            {{ category.description }}
            <ul>
                <li *ngFor="let quote of category.quotes">
                    {{ quote.text }}
                </li>
            </ul>
        </section>
    `
})

export class CategoryDetailComponent implements OnInit {
    
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _api: QuotesApiService 
    ) { }

    private _routeSubscription: Subscription

    category: Category

    ngOnInit() {
        this._routeSubscription = this._route.params.subscribe( async param => {
            try {
                this.category = await this._api.getCategory(param.id)
            } catch (error) {
                this._router.navigate(["404"], { skipLocationChange: true })
            }
        }) 
    }

    ngOnDestroy() {
        this._routeSubscription.unsubscribe()
    }
}