import { OnInit, Component } from "@angular/core";
import { Quote } from "../models/quote.model";
import { QuotesApiService } from "../services/quotes-api.service";

@Component({
    selector: "random-quote",
    template: `
        <div class="random-quote-component" *ngIf="randomQuote">
            <div class="quote">{{ randomQuote.text }}</div>
            <button (click)="onShowRandomQuote()">More</button>
        </div>
    `
}) 
export class RandomQuoteComponent implements OnInit {
    
    quotes: Quote[]
    randomQuote: Quote

    constructor(private _api: QuotesApiService) {}

    async ngOnInit() {
        try {
            this.quotes = await this._api.getQuotes()
        }
        catch(err) {
            //
        }
        this.onShowRandomQuote()
    }
    
    onShowRandomQuote() {
        if (!this.quotes) return
        this.randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)]
    }
}