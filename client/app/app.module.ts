import { NgModule } from "@angular/core"
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RandomQuoteComponent } from "./components/random-quote.component";
import { QuotesApiService } from "./services/quotes-api.service";
import { CategoryListComponent } from "./components/category-list.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        RandomQuoteComponent,
        CategoryListComponent
    ],
    providers: [
        QuotesApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
