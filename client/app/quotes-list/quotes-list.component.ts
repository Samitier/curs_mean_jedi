import { OnInit, Component, ViewChild } from "@angular/core";
import { QuotesApiService } from "../shared/services/quotes-api.service";
import { Quote } from "../shared/models/quote.model";
import { QuoteFormComponent } from "./components/quote-form.component";


@Component({
    selector: "random-quote",
    template: `
        <section class="quote-list-component container" *ngIf="quotes">
            <h1 class="text-center">List of quotes</h1>
            <div class="text-center">
                <a (click)="onAddNewQuote()" class="btn btn-add">
                    <i class="material-icons">add</i> 
                    <span>Add new</span> 
                </a>
            </div>
            <br>
            <ul>
                <li *ngFor="let quote of quotes">
                    <div class="quote">"{{ quote.text }}"</div>
                    <div class="author">- {{ quote.character }}</div>
                </li>
            </ul>
            <quote-form 
                #quoteForm
                (onSubmitted)="onNewQuoteAdded($event)"
            ></quote-form>
        </section>
    `
}) 
export class QuotesListComponent implements OnInit {
    
    quotes: Quote[]
    
    @ViewChild(QuoteFormComponent)
    quoteForm: QuoteFormComponent

    constructor(private _api: QuotesApiService) {}

    async ngOnInit() {
        try {
            this.quotes = await this._api.getQuotes()
        }
        catch(err) {
            //
        }
    }

    onAddNewQuote() {
        this.quoteForm.open()
    }

    onNewQuoteAdded(quote: Quote) {
        this.quotes.push(quote)
        this.quoteForm.close()
    }
}