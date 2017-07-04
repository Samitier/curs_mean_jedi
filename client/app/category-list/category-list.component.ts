import { OnInit, Component } from "@angular/core";
import { QuotesApiService } from "../shared/services/quotes-api.service";
import { Category } from "../shared/models/category.model";

@Component({
    selector: "category-list",
    template: `
        <section class="category-list-component container">
            <h1 class="text-center">Quote categories</h1>
            <ul>
                <li *ngFor="let category of categories" (click)="onShowDescription(category)">
                    <a routerLink="/categories/{{ category.id }}">{{ category.title }}</a>
                </li>
            </ul>
        </section>
    `
})
export class CategoryListComponent implements OnInit{

    constructor(private _api: QuotesApiService) {}

    categories: Category[]

    async ngOnInit() {
        try {
            this.categories = await this._api.getCategories()
        } catch (error) {
            //
        }
    }
}