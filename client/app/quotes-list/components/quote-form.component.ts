import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quote } from "../../shared/models/quote.model";
import { QuotesApiService } from "../../shared/services/quotes-api.service";
import { Category } from "../../shared/models/category.model";

@Component({
    selector: 'quote-form',
    template: `
        <div class="popup" *ngIf="isOpened">
            <div class="popup-body">
                <h2 class="text-center">Create a new quote</h2>
                <form novalidate #quoteForm="ngForm">
                    <div class="form-field">
                        <label>Text:</label>
                        <textarea 
                            placeholder="The text of the quote"
                            [(ngModel)] = "quote.text"
                            maxlength="200"
                            minlength="3"
                            required
                            name="text"
                            #text="ngModel"
                        >
                        </textarea>
                        <div *ngIf="text.invalid && text.dirty">
                            This field is obligatory.
                        </div>
                    </div>
                    <div class="form-field">
                        <label>Character:</label>
                        <input 
                            type="text" placeholder="Character"
                            [(ngModel)] = "quote.character"
                            required
                            name="character"
                            #character="ngModel"
                        >
                        <div *ngIf="character.invalid && character.dirty">
                            This field is obligatory.
                        </div>
                    </div>
                    <div class="form-field">
                        <label>Movie:</label>
                        <input 
                            type="text" placeholder="Movie"
                            [(ngModel)] = "quote.movie"
                            required
                            name="movie"
                            #movie="ngModel"
                        >
                        <div *ngIf="movie.invalid && movie.dirty">
                            This field is obligatory.
                        </div>
                    </div>
                    <div class="form-field">
                        <label>Year:</label>
                        <input 
                            type="number" placeholder="Year"
                            [(ngModel)] = "quote.year"
                            required
                            name="year"
                            #year="ngModel"
                        >
                        <div *ngIf="year.invalid && year.dirty">
                            This field is obligatory.
                        </div>
                    </div>
                    <div class="form-field">
                        <label>Category:</label>
                        <select 
                            required
                            name="category"
                            [(ngModel)]="quote.category_id"
                            #category="ngModel"
                        >
                            <option 
                                *ngFor="let category of categories"
                                [value]="category.id"
                            >
                                {{ category.title }}
                            </option>
                        </select>
                        <div *ngIf="category.invalid && category.dirty">
                            This field is obligatory.
                        </div>
                    </div>
                    <div class="form-field text-right">
                        <a 
                            class="btn" 
                            (click)="onSendQuote()"
                            [class.inactive]="quoteForm.form.invalid"
                        >Send</a>
                    </div>
                </form>
            </div>
            <div class="backdrop"></div>
        </div>
    `
})

export class QuoteFormComponent implements OnInit {
    
    quote: Quote
    categories: Category[] = []

    isOpened:boolean = false

    @Output() onSubmitted = new EventEmitter<Quote>()

    constructor(private _api: QuotesApiService) { }

    async ngOnInit() {
        this.quote = new Quote()
        if(!this.isOpened || this.categories.length > 0) return
        try {
            this.categories = await this._api.getCategories()
        }
        catch (e) {
            console.log(e);
        }
    }

    async onSendQuote() {
        try {
            await this._api.postQuote(this.quote)
            this.onSubmitted.emit(this.quote)
        }
        catch (e) {
            console.log(e);
        }
    }

    close () {
        this.isOpened = false
    }

    open () {
        this.isOpened = true
        this.ngOnInit()
    }
}