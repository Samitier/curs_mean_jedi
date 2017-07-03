import { QuotesApiService } from "../services/quotes-api.service";
import { OnInit, Component } from "@angular/core";
import { Category } from "../models/category.model";

@Component({
    selector: "category-list",
    template: `
        <section class="category-list-component">
            Select a category from the list:
            <ul>
                <li *ngFor="let category of categories" (click)="onShowDescription(category)">
                    {{ category.title }}
                </li>
                <div *ngIf="detailDescription">{{ detailDescription }}</div>
            </ul>
        </section>
    `
})
export class CategoryListComponent implements OnInit{

    constructor(private _api: QuotesApiService) {}

    categories: Category[]
    detailDescription: string

    async ngOnInit() {
        try {
            this.categories = await this._api.getCategories()
        } catch (error) {
            //
        }
    }

    onShowDescription (category: Category) {
        console.log(category);
        this.detailDescription = category.description
    }
}