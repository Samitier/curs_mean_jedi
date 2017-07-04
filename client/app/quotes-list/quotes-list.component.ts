import { OnInit, Component } from "@angular/core";
import { Quote } from "@angular/compiler/src/expression_parser/ast";
import { QuotesApiService } from "../shared/services/quotes-api.service";


@Component({
    selector: "random-quote",
    template: `
        <section class="quote-list-component container" *ngIf="quotes">
            <h1 class="text-center">List of quotes</h1>
            <ul>
                <li *ngFor="let quote of quotes">
                    <div class="quote">"{{ quote.text }}"</div>
                    <div class="author">- {{ quote.character }}</div>
                </li>
            </ul>
        </section>
    `
}) 
export class QuotesListComponent implements OnInit {
    
    quotes: Quote[]

    constructor(private _api: QuotesApiService) {}

    async ngOnInit() {
        try {
            this.quotes = await this._api.getQuotes()
        }
        catch(err) {
            //
        }
    }
}