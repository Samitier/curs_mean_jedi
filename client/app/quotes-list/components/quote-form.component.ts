import { Component, OnInit } from '@angular/core';
import { Quote } from "../../shared/models/quote.model";

@Component({
    selector: 'quote-form',
    template: `
        <div class="popup">
            <div class="popup-body">
                <h2 class="text-center">Create a new quote</h2>
                <div class="form-field">
                    <label>Text:</label>
                    <textarea 
                        placeholder="The text of the quote"
                        [(ngModel)] = "quote.text"
                    >
                    </textarea>
                </div>
                <div class="form-field">
                    <label>Character:</label>
                    <input 
                        type="text" placeholder="Character"
                        [(ngModel)] = "quote.character"
                    >
                </div>
                <div class="form-field">
                    <label>Movie:</label>
                    <input 
                        type="text" placeholder="Movie"
                        [(ngModel)] = "quote.movie"
                    >
                </div>
                <div class="form-field">
                    <label>Year:</label>
                    <input 
                        type="text" placeholder="Year"
                        [(ngModel)] = "quote.year"
                    >
                </div>
                <div class="form-field text-right">
                    <a class="btn" (click)="onSendQuote()">Send</a>
                </div>
            </div>
            <div class="backdrop"></div>
        </div>
    `
})

export class QuoteFormComponent implements OnInit {
    
    quote: Quote

    constructor() { }

    ngOnInit() {
        this.quote = new Quote()
    }

    onSendQuote() {

    }
}